let arr = [];
let input = document.getElementById('array-value')

// Tạo mảng và in ra label
function addArray()
{
  let value = parseInt(input.value);
  if(!isNaN(value))
  {
    arr.push(value);

    document.getElementById('lbl-array').textContent= arr.join(' ,');
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

function firstPrime(index) {
  let result = addArray();
  let firstPrime = null;
  for (let i = 0; i < result.length; i++)
  {
    if (result[i] ==2)
    {
      firstPrime = result[i];
      break;
    }
    else if(result[i] % i != 0 && result[i] >= 2)
    {
      firstPrime = result[i];
      break;
    }
   
  }
  if(firstPrime != null)
  {
    document.getElementById('lbl-ntNumber').textContent = 'Số nguyên tố đầu tiên ' + firstPrime;
  }
  else
  {
      document.getElementById('lbl-ntNumber').textContent = 'Không tìm thấy số nguyên tốt trong mảng ';
  }
}

