// Product color selection and image change functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('MainImg');
    const colorOptions = document.querySelectorAll('.color-option');
    const smallImgs = document.querySelectorAll('.small-img');
    const sizeButtons = document.querySelectorAll('.size-button');
    const addToBagButton = document.querySelector('.add-to-bag');

    let selectedSize = null;

    // Function to update thumbnail images and active state
    function updateThumbnails(selectedColor) {
        // Get the src of the selected color option image
        const newMainImage = selectedColor.querySelector('img').src;
        mainImg.src = newMainImage;

        // Remove active class from all color options
        colorOptions.forEach(option => {
            option.classList.remove('active');
        });

        // Add active class to selected color option
        selectedColor.classList.add('active');
    }

    // Add click event for color options
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            updateThumbnails(this);
        });
    });

    // Add click event for thumbnail images
    smallImgs.forEach(img => {
        img.addEventListener('click', function() {
            mainImg.src = this.src;
            
            // Update the active color option based on the selected thumbnail
            colorOptions.forEach(option => {
                const colorImg = option.querySelector('img');
                if (colorImg.src === this.src) {
                    updateThumbnails(option);
                }
            });
        });
    });    // Size selection functionality
    sizeButtons.forEach(button => {
        if (!button.classList.contains('disabled')) {
            button.addEventListener('click', function() {
                // Remove active class from all size buttons
                sizeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to selected button
                this.classList.add('active');
                
                // Update selected size
                selectedSize = this.textContent;
            });
        }
    });

    // Add to bag button functionality
    addToBagButton.addEventListener('click', function() {
        if (selectedSize) {
            alert(`Added to bag - Size: ${selectedSize}`);
            // Here you would typically send this data to a shopping cart system
        } else {
            alert('Please select a size');
        }
    });
});