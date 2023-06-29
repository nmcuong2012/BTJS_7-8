let arr = [];
let input = document.getElementById('array-value')

// Tạo mảng và in ra label
function addArray()
{
  let value = parseInt(input.value);
  if(!isNaN(value))
  {
    arr.push(value);

    document.getElementById('lbl-array').textContent= arr.join(',');
  }
  input.value = '';
  console.log(arr)
  return arr;
}
// Tính tổng các só dương
function sumNumber (){
  let result = addArray();
  let sum = 0 ;
  
    for(let i = 0; i < result.length; i++)
    {
      if(result[i] > 0)
      {
        sum += result[i]
      }
      
    }
  document.getElementById('lbl-sum').textContent = 'Tổng các số dương trong mảng = ' + sum; 
}

// Đếm các số dương trong mảng

function countNumber(){
  let result = addArray();
  let count = 0 ;

  for (let i = 0; i < result.length; i++) {
    if (result[i] >0)
    {
      count++;
    }    
  }
  document.getElementById('lbl-count').textContent = ' Số dương có trong mảng là ' + count; 
}

// Tìm số nhỏ nhất trong mảng 
function minArray() {
  let result = addArray();
  let minNumber = result[0];
  for (let i = 1; i < result.length; i++)
  {
    if (result[i] < minNumber)
    {
      minNumber = result[i];
    }
  }
  document.getElementById('lbl-min').textContent = ' Số nhỏ nhất trong mảng là ' + minNumber; 

}
// Tìm số dương nhỏ nhất
function minPositive () {
  let result = addArray();
  let minNumber = result[0];
  for (let i = 1; i < result.length; i++)
  {
    if (result[i] < minNumber && result[i] > 0)
    {
      minNumber = result[i];
    }
  }
  document.getElementById('lbl-minNumber').textContent = ' Số nhỏ nhất trong mảng là ' + minNumber; 

}

// Tìm số chẵn cuối cùng trong mảng
function lastPositive(){
  let result = addArray();
  let lastPositive = null;
  for (let i = result.length - 1; i >= 0; i--){
    if (result[i] % 2 == 0)
    {

      lastPositive = result[i];
      break;
    }
  }
  if (lastPositive !== null) {
    document.getElementById('lbl-lastNumber').textContent = ' Số chẵn cuối cùng trong mảng là ' + lastPositive; 
  } else {
    document.getElementById('lbl-lastNumber').textContent = ' Không tìm thấy số chẵn trong mảng'; 
  }
}


// Đổi chỗ

function swapElements () {
  index1 = +document.getElementById('inputSwap1').value;
  index2 = +document.getElementById('inputSwap2').value;
  let result = addArray();
  let temp = result[index1];
  result[index1] = result[index2];
  result[index2] = temp;

  document.getElementById('lbl-swapNumber').textContent = 'Mảng sau khi đổi chỗ' + result;

}

// Sắp xếp tăng dần 

function sortArray() {
  let result = addArray();

  let arraySort = result.sort()
  document.getElementById('lbl-sortNumber').textContent = 'Mảng sau sắp xếp ' + arraySort;
}


// Số nguyên tố đầu tiên trong mảng


//Hàm kiểm tra số nguyên tố
function checkPrime(n) {
  if (n < 2) return false;
  for (let r = 2; r <= Math.sqrt(n); r++) {
    if (n % r === 0) return false;
  }
  return true;
}

function firstPrime() {
  let result = addArray();
  let foundPrime = false; 
  let primeNumber; 
  
  for (let i = 0; i < result.length; i++) {
    if (checkPrime(result[i])) {
      primeNumber = result[i];
      foundPrime = true;
      break;
    }
  }
  
  if (foundPrime) {
    document.getElementById('lbl-ntNumber').textContent = 'Số nguyên tốt đầu tiên trong mảng : ' + primeNumber;
  } else {
    document.getElementById('lbl-ntNumber').textContent = 'Không có số nguyên tố nào trong mảng !'
  }
}

// Hàm kiểm tra số dạng FLOAT
let arrayCount = [];
function numberFloat()
{
  let number = +document.getElementById('inputCount').value;
  arrayCount.push(number);
  document.getElementById('lbl-arrayCount').textContent =  arrayCount;
}

function findInt() {
  let n = 0
  for (let i = 0; i < arrayCount.length; i++) 
    Number.isInteger(arrayCount[i]) && n++;
    document.getElementById('lbl-countNumber').textContent = "Số nguyên: " + n
}

/// So sánh số nguyên dương và âm
function compareNumber()
{
  let result = addArray();
  let n = 0 ;
  let m = 0;
  for (let i = 0; i < result.length; i++)
  {
    if (result[i] > 0)
      {
        n++;
      }
    else if(result[i] < 0)
    {
      m++;
    }
    
  }
  if(m > n )
  {
    document.getElementById('lbl-compNumber').textContent = 'Số âm ' + m + ' > Số dương ' + n; 
  }
  else if(m < n)
  {
    document.getElementById('lbl-compNumber').textContent = 'Số âm ' + m + ' < Số dương ' + n;
  }
  else
  {
    document.getElementById('lbl-compNumber').textContent = 'Số âm ' + m + '= Số dương ' + n;
  }
}



