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

// Call Function
function call(callCard)
{
    const call = callCard.closest('.card');

    const navCoin = document.getElementById('nav-coin');
    const coin = parseInt(navCoin.textContent);
    let perCallCoin = coin - 20;
    if(perCallCoin >= 20 || perCallCoin === 0)
    {
        navCoin.textContent = perCallCoin;
    }
    else
    {
        return;
    }

    const name = call.querySelector('#card-name').textContent;
    const number = call.querySelector('#emergency-number').textContent;

    const time = new Date().toLocaleTimeString();

    const div = document.createElement('div');
    div.innerHTML = 
    `<div class="bg-gray-200 rounded-lg p-2 px-5 flex items-center justify-between">
            <div class="space-y-1">
                <h1 class="text-lg font-semibold">${name}</h1>
                <p class="text-base text-[#5C5C5C] font-medium">${number}</p>
            </div>
            <div>
                <p class="text-base font-medium">${time}</p>
            </div>
    </div>`

    const callHistoryCards = document.getElementById('call-history-cards');
    callHistoryCards.appendChild(div);
}
// Clear History Function
function clearHistory()
{
    const callHistoryCards = document.getElementById('call-history-cards');
    callHistoryCards.innerHTML = ``;
}