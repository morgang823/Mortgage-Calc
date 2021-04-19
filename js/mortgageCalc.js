function buildPaymentSchedule() {
    let loan = +document.getElementById('loanAmount').value;
    let months = +document.getElementById('loanTerm').value * 12;
    let mthRate = (+document.getElementById('loanRate').value * 0.01) / 12;

    let payment = calculatePayment(loan, months, mthRate);
    let paymentArray = getPayments(loan, payment, months, mthRate);
    displayStats(payment, loan, paymentArray);
    displayData(paymentArray);
    return false;
}

// Calculate Payment
function calculatePayment(loan, months, mthRate) {
    let x = Math.pow(1 + mthRate, months);
    return (loan * x * mthRate) / (x - 1);

    // Source: https://www.oreilly.com/library/view/javascript-the-definitive/0596000480/ch01s08.html
}

// Get Payments (build payment array)
function getPayments(loan, payment, months, mthRate) {
    let paymentArray = [];
    let totalInterest = 0;
    let balance = loan;
    let interest = 0;
    let principal = 0;

    for (let i = 1; i <= months; i++) {
        let obj = {};

        interest = balance * mthRate;
        principal = payment - interest;
        totalInterest += interest;
        balance -= principal;

        obj['month'] = i;
        obj['payment'] = payment;
        obj['principal'] = principal;
        obj['interest'] = interest;
        obj['totalInterest'] = totalInterest;
        obj['balance'] = Math.abs(balance); // Fix negative value

        paymentArray.push(obj);
    }

    return paymentArray;
}

// Set Stats
function displayStats(payment, loan, paymentArray) {
    // Total Interest
    let totalInterest = paymentArray.reduce((acc, cv) => acc + cv.interest, 0);
    let totalCost = totalInterest + loan;

    document.getElementById('payment').innerHTML = payment.toLocaleString(
        'en-US', {
            style: 'currency',
            currency: 'USD'
        }
    );
    document.getElementById('totalPrincipal').innerHTML = loan.toLocaleString(
        'en-US', {
            style: 'currency',
            currency: 'USD',
        }
    );
    document.getElementById(
        'totalInterest'
    ).innerHTML = totalInterest.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    document.getElementById('totalCost').innerHTML = totalCost.toLocaleString(
        'en-US', {
            style: 'currency',
            currency: 'USD',
        }
    );
}

// Display event data
function displayData(paymentArray) {
    const myTemplate = document.getElementById('Data-Template');
    const resultsBody = document.getElementById('resultsBody');

    // clear table first
    resultsBody.innerHTML = '';

    // Number format reference https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp
    for (let i = 0; i < paymentArray.length; i++) {
        const dataRow = document.importNode(myTemplate.content, true);

        dataRow.getElementById('month').textContent = paymentArray[i].month;
        dataRow.getElementById('payment').textContent = paymentArray[
            i
        ].payment.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: '2',
            maximumFractionDigits: '2',
        });
        dataRow.getElementById('principal').textContent = paymentArray[
            i
        ].principal.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: '2',
            maximumFractionDigits: '2',
        });
        dataRow.getElementById('interest').textContent = paymentArray[
            i
        ].interest.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: '2',
            maximumFractionDigits: '2',
        });
        dataRow.getElementById('totalInterest').textContent = paymentArray[
            i
        ].totalInterest.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: '2',
            maximumFractionDigits: '2',
        });
        dataRow.getElementById('balance').textContent = paymentArray[
            i
        ].balance.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: '2',
            maximumFractionDigits: '2',
        });

        resultsBody.appendChild(dataRow);
    }
}