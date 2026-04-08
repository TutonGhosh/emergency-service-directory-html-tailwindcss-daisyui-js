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