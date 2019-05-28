---
title: Add Transaction
---
<p>Generates a new IXI transaction to transfer funds between wallets. Multiple 'from' wallets with different amounts may be specified, as well as multiple target wallets and amounts.</p>
<p>Note: If you do not specify <code>from</code>, the required funds and fee will be deducted from the node's addresses (the order is unspecified). Multiple addresses may be used if the first one chosen does not have sufficient funds.
Alternatively, if you do specify <code>from</code>, your total amount must include the required transaction fee. The transaction fee may be calculated in multiple ways:</p>
<ul>
<li>Call the API <code>createrawtransaction</code>, which will generate a transaction object but not send it to the network. In this way you can measure the object's size and calculate an appropriate fee. This API takes the same parameters as <code>addtransaction</code>.</li>
<li>Call the API <code>calculatetransactionfee</code>, which will return the required fee amount for the given transaction. This API takes the same parameters as <code>addtransaction</code>.</li>
<li>Use the <code>autofee</code> parameter, which will deduct the required transaction fee from the first specified <code>from</code> address. The address must have sufficient funds to cover both the amount and fee. You can change the order of <code>from</code> addresses to ensure this.</li>
</ul>