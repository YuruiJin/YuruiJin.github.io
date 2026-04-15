(function () {
  const modalElement = document.getElementById("cvDownloadProtectionModal");

  if (!modalElement) {
    return;
  }

  const formElement = document.getElementById("cvDownloadProtectionForm");
  const passwordInput = document.getElementById("cvDownloadPasswordInput");
  const visitorInput = document.getElementById("cvDownloadVisitorInput");
  const errorElement = document.getElementById("cvDownloadProtectionError");
  const submitButton = document.getElementById("cvDownloadProtectionSubmit");
  const triggerElements = document.querySelectorAll(".cv-protected-download");
  const expectedPasswordHash = (modalElement.dataset.cvPasswordHash || "").toLowerCase();
  const originalSubmitText = submitButton ? submitButton.textContent : "";
  const isChinese = document.documentElement.lang === "zh-cn";
  const text = {
    processing: isChinese ? "处理中..." : "Processing...",
    missingPdf: isChinese ? "无法找到简历 PDF。" : "Unable to locate CV PDF.",
    missingConfig: isChinese ? "未配置下载密码。" : "Password protection is not configured.",
    invalidPassword: isChinese ? "密码错误，请重试。" : "Incorrect password. Please try again.",
    missingLib: isChinese ? "PDF 库尚未就绪，请刷新后重试。" : "PDF library is not available. Please refresh and try again.",
    fetchFailure: isChinese ? "获取简历 PDF 失败。" : "Failed to fetch CV PDF.",
    genericFailure: isChinese ? "处理下载请求失败。" : "Unable to process CV download.",
  };

  let currentPdfUrl = "";
  let currentPdfFilename = "CV_Jin_Yurui.pdf";
  let fallbackBackdrop = null;

  const showError = (message) => {
    if (!errorElement) {
      return;
    }
    errorElement.textContent = message;
    errorElement.classList.remove("d-none");
  };

  const clearError = () => {
    if (!errorElement) {
      return;
    }
    errorElement.textContent = "";
    errorElement.classList.add("d-none");
  };

  const setSubmitting = (isSubmitting) => {
    if (!submitButton) {
      return;
    }
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? text.processing : originalSubmitText;
  };

  const openModal = () => {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.modal) {
      window.jQuery(modalElement).modal("show");
      return;
    }

    modalElement.style.display = "block";
    modalElement.classList.add("show");
    modalElement.removeAttribute("aria-hidden");
    document.body.classList.add("modal-open");

    fallbackBackdrop = document.createElement("div");
    fallbackBackdrop.className = "modal-backdrop fade show";
    fallbackBackdrop.setAttribute("data-cv-backdrop", "true");
    fallbackBackdrop.addEventListener("click", () => closeModal());
    document.body.appendChild(fallbackBackdrop);
  };

  const closeModal = () => {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.modal) {
      window.jQuery(modalElement).modal("hide");
      return;
    }

    modalElement.classList.remove("show");
    modalElement.style.display = "none";
    modalElement.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (fallbackBackdrop) {
      fallbackBackdrop.remove();
      fallbackBackdrop = null;
    }
  };

  const toHex = (arrayBuffer) => {
    return Array.from(new Uint8Array(arrayBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  };

  const hashPassword = async (password) => {
    const encoded = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    return toHex(digest);
  };

  const fitWatermarkText = (text, font, fontSize, maxWidth) => {
    if (font.widthOfTextAtSize(text, fontSize) <= maxWidth) {
      return text;
    }

    let trimmed = text;
    while (trimmed.length > 0 && font.widthOfTextAtSize(`${trimmed}...`, fontSize) > maxWidth) {
      trimmed = trimmed.slice(0, -1);
    }

    return trimmed.length > 0 ? `${trimmed}...` : "...";
  };

  const createWatermarkText = (visitorInfo) => {
    const visitor = visitorInfo && visitorInfo.trim().length > 0 ? visitorInfo.trim() : "Authorized User";
    const utcTime = new Date().toISOString().replace("T", " ").replace("Z", "");
    const sourceHost = "yuruijin.github.io";

    return `Authorized licensed use limited to: ${visitor}. Downloaded on ${utcTime} UTC from ${sourceHost}. Restrictions apply.`;
  };

  const downloadWatermarkedPdf = async (pdfUrl, filename, visitorInfo) => {
    if (!window.PDFLib) {
      throw new Error(text.missingLib);
    }

    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error(text.fetchFailure);
    }

    const sourceBytes = await response.arrayBuffer();
    const pdfDocument = await PDFLib.PDFDocument.load(sourceBytes);
    const font = await pdfDocument.embedFont(PDFLib.StandardFonts.Helvetica);
    const watermarkText = createWatermarkText(visitorInfo);
    const fontSize = 7;

    pdfDocument.getPages().forEach((page) => {
      const { width } = page.getSize();
      const x = 24;
      const y = 14;
      const maxWidth = Math.max(width - x * 2, 80);
      const pageText = fitWatermarkText(watermarkText, font, fontSize, maxWidth);

      page.drawText(pageText, {
        x,
        y,
        size: fontSize,
        font,
        color: PDFLib.rgb(0.45, 0.45, 0.45),
      });
    });

    const outputBytes = await pdfDocument.save();
    const blob = new Blob([outputBytes], { type: "application/pdf" });
    const downloadUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = filename || "CV_Jin_Yurui.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(downloadUrl);
  };

  triggerElements.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      currentPdfUrl = trigger.dataset.cvPdfUrl || "";
      currentPdfFilename = trigger.dataset.cvPdfFilename || "CV_Jin_Yurui.pdf";
      passwordInput.value = "";
      clearError();
      openModal();
    });
  });

  modalElement.querySelectorAll('[data-dismiss="modal"]').forEach((dismissTrigger) => {
    dismissTrigger.addEventListener("click", () => {
      closeModal();
    });
  });

  modalElement.addEventListener("click", (event) => {
    if (event.target === modalElement) {
      closeModal();
    }
  });

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearError();

    if (!currentPdfUrl) {
      showError(text.missingPdf);
      return;
    }

    if (!expectedPasswordHash) {
      showError(text.missingConfig);
      return;
    }

    setSubmitting(true);

    try {
      const passwordHash = await hashPassword(passwordInput.value);
      if (passwordHash !== expectedPasswordHash) {
        showError(text.invalidPassword);
        return;
      }

      await downloadWatermarkedPdf(currentPdfUrl, currentPdfFilename, visitorInput.value);
      closeModal();
    } catch (error) {
      showError(error instanceof Error ? error.message : text.genericFailure);
    } finally {
      setSubmitting(false);
    }
  });
})();
