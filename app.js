document.addEventListener('DOMContentLoaded', function () {

    const memeForm = document.querySelector('.meme-form');
    const memeURL = document.querySelector('.meme-url');
    const topText = document.querySelector('.top-text-input');
    const btmText = document.querySelector('.btm-text-input');
    const memeGallery = document.querySelector('.gallery');

    memeForm.addEventListener('submit', function(evt) {
        evt.preventDefault();

        //creating IMG li
        const newMemeImg = document.createElement('li');
        newMemeImg.classList.add('meme-img');
        newMemeImg.innerHTML = `<img src="${memeURL.value}">`;
        //validating form value
        if (memeURL.value === null || memeURL.value === ''){
            alert('Image URL field cannot be empty!');
            return false;
        };
        
        //creating top text on meme
        const newTopText = document.createElement('div');
        newTopText.classList.add('new-text','top');
        newTopText.innerText = topText.value;
        //validating form value
        if (topText.value === null || topText.value === ''){
            alert('Top text field cannot be empty!');
            return false;
        };

        //creating bottom text on meme
        const newBtmText = document.createElement('div');
        newBtmText.classList.add('new-text','bottom');
        newBtmText.innerText = btmText.value;
        //validating form value
        if (btmText.value === null || btmText.value === ''){
            alert('Bottom text field cannot be empty!');
            return false;
        };

        //creating remove button
        const removeBtn = document.createElement('div');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerText = 'REMOVE';

        //appending created items
        newMemeImg.append(removeBtn);
        memeGallery.append(newMemeImg);
        newMemeImg.append(newTopText);
        newMemeImg.append(newBtmText);
    
        memeForm.reset();

        //event listener to remove meme
        removeBtn.addEventListener('click', function(evt) {
            const targetRemoveBtn = evt.target.tagName.toLowerCase();
            if (targetRemoveBtn === "div") {
                evt.target.parentNode.remove();
            };
        });
    });
});