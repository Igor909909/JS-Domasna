// 1. The even/odd reporter ================

for (let i=0; i<=20; i++) {
    if (i%2==0) {
        console.log (`Number ${i} is even`);
    } else {
        console.log (`Number ${i} is odd`);
    };
};



// 2. Multiplication Tables ===============


for (let i=0; i<=10; i++) {
    let result = i * 9;
    console.log (`${i} * 9 = ${result}`);
};



// 3. The Grade Assigner ===============

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
  }
  
  for (let grade = 60; grade <= 100; grade++) {
    let result = assignGrade(grade);
    console.log(`For ${grade}, you got a ${result}.`);
  };



  // 4. Output the Mario tower in the console with five hashtags

  for (let i = 0; i <= 5; i++) {
    let tower = '#'.repeat(i);
    console.log(tower);
  }