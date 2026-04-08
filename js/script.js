// Refil Heart Function
function fillHeart(heart)
{
    const navHeart = document.getElementById('nav-heart');
    let heartCnt = parseInt(navHeart.innerText);
    if(heart.classList.contains('fa-regular'))
    {
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
        heart.classList.add('text-red-500');
        heartCnt++;
        navHeart.innerText = heartCnt;
    }
    else
    {
        heart.classList.remove('fa-solid', 'text-red-500');
        heart.classList.add('fa-regular');
        heartCnt--;
        navHeart.innerText = heartCnt;
    }
}

// Number Copy Function
function copyNumber(btn)
{
    const card = btn.closest('.card');

    const number = card.querySelector('#emergency-number').textContent;
    const copyText = card.querySelector('#copy-text');
    const copyIcon = card.querySelector('#copy-icon');

    navigator.clipboard.writeText(number).then (() =>
    {
        copyText.textContent = 'Copied!';
        copyIcon.className = 'fa-solid fa-copy';

        setTimeout ( () =>
        {
            copyText.textContent = 'Copy';
            copyIcon.className = 'fa-regular fa-copy';
        }, 1000);
    });

    const navCopy = document.getElementById('nav-copy');
    let copyCnt = parseInt(navCopy.innerText);
    copyCnt++;
    navCopy.innerText = copyCnt;
}