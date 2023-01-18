//Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);

promise.then(f1, f2);

//ANSWER: No ,That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.