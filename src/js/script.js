// Hàm kiểm tra số hợp lệ
function validateNumber(inputId) {
    const input = document.getElementById(inputId);
    const errorDiv = document.getElementById('error');
    const notification = document.getElementById('notification');

    if (isNaN(input.value) || input.value.trim() === '') {
        errorDiv.textContent = `Giá trị nhập ở ô ${inputId === 'num1' ? 'số thứ nhất' : 'số thứ hai'} không phải là số hợp lệ.`;
        notification.textContent = "Thông báo: "; // Đảm bảo luôn có 'Thông báo:'
        notification.style.display = 'inline'; // Hiển thị thông báo
        input.focus();
        return false;
    } else {
        errorDiv.textContent = ''; // Xóa lỗi nếu hợp lệ
        return true;
    }
}

// Hàm tính toán
function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultInput = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const notification = document.getElementById('notification');

    resultInput.value = '';
    errorDiv.textContent = '';
    notification.style.display = 'inline'; // Hiển thị thông báo từ đầu
    notification.textContent = "Thông báo: "; // Đặt lại 'Thông báo:' cho đúng cú pháp

    // Kiểm tra nếu không có phép toán được chọn
    if (!operation) {
        errorDiv.textContent = 'Bạn chưa chọn phép toán.';
        return;
    }

    if (!validateNumber('num1') || !validateNumber('num2')) {
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    // Xử lý phép toán
    switch (operation.value) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                errorDiv.textContent = 'Không thể chia cho 0.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            errorDiv.textContent = 'Phép toán không hợp lệ.';
            return;
    }

    resultInput.value = result;
    notification.textContent += ' Phép toán thực hiện thành công!'; // Thông báo thành công
}