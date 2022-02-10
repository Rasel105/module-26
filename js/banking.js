document
    .getElementById("deposit-button")
    .addEventListener("click", function() {
        // finding the deposit input value
        const depositInput = document.getElementById("diposit-input");
        const depositInputText = depositInput.value;
        const depostiInputAmount = parseFloat(depositInputText);

        // finding the deposit display box
        const depositBox = document.getElementById("deposit-total");
        const depositBoxText = depositBox.innerText;
        const depositBoxAmount = parseFloat(depositBoxText);

        // adjust the total value
        const depositTotalAmount = depositBoxAmount + depostiInputAmount;
        depositBox.innerText = depositTotalAmount;

        // adjust the total balance box

        const totalBalace = document.getElementById("balance-total");
        const totalBalaceText = totalBalace.innerText;
        const totalBalaceAmount = parseFloat(totalBalaceText);

        // adjust the deposit and total balance value;

        const totalDepositAndBalance = totalBalaceAmount + depostiInputAmount;

        totalBalace.innerText = totalDepositAndBalance;
        // clearing the input box value
        depositInput.value = "";
    });

// WithDrawAmount input value calculation

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        // finding the withdraw inputbox and value

        const withdrawInputBox = document.getElementById("withdraw-input");
        const withdrawInputText = withdrawInputBox.value;
        const withdrawInputAmount = parseFloat(withdrawInputText);

        // finding the withdraw display box
        const withdrawBox = document.getElementById("withdraw-total");
        const withdrawText = withdrawBox.innerText;
        const withdrawAmount = parseFloat(withdrawText);
        const totalInputWithdraw = withdrawInputAmount + withdrawAmount;

        withdrawBox.innerText = totalInputWithdraw;

        // finding the display balace and calculation

        const displayBalance = document.getElementById("balance-total");
        const displayBalanceText = displayBalance.innerText;
        const displayBalaceAmount = parseFloat(displayBalanceText);

        const newBalaceTotal = displayBalaceAmount - withdrawInputAmount;
        displayBalance.innerText = newBalaceTotal;
        // clearing the withtextValue
        withdrawInputBox.value = "";
    });