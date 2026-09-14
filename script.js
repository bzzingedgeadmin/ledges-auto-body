// Ledge's Auto Body - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close nav on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Drag and Drop File Upload Preview
    const dropZone = document.getElementById('drop-zone');
    const photoInput = document.getElementById('photoInput');
    const filePreviewContainer = document.getElementById('file-preview-container');

    if (dropZone && photoInput) {
        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('dragover');
            }, false);
        });

        dropZone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            photoInput.files = files;
            handleFiles(files);
        });

        photoInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
    }

    function handleFiles(files) {
        filePreviewContainer.innerHTML = '';
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const thumb = document.createElement('div');
                    thumb.className = 'preview-thumb';
                    thumb.innerHTML = `<img src="${e.target.result}" alt="${file.name}">`;
                    filePreviewContainer.appendChild(thumb);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Photo Estimate Form Submission
    const estimateForm = document.getElementById('photo-estimate-form');

    if (estimateForm) {
        estimateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const vehicleInfo = document.getElementById('vehicleInfo').value;
            
            showToast(`Thank you, ${fullName}! Your photo estimate request for "${vehicleInfo}" has been sent. We will call you back shortly!`);
            
            estimateForm.reset();
            if (filePreviewContainer) filePreviewContainer.innerHTML = '';
        });
    }

    // Toast Notification helper
    function showToast(message) {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);
    }
});
