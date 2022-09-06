function preCalTax (taxableIncome) {

    if (taxableIncome > 0 && taxableIncome <= 60e+6) {
        tax = taxableIncome * 0.05;
    }else if (taxableIncome > 60e+6 && taxableIncome <= 120e+6) {
        tax = taxableIncome * 0.1;
    }else if (taxableIncome > 120e+6 && taxableIncome <= 210e+6) {
        tax = taxableIncome * 0.15;
    }else if (taxableIncome > 210e+6 && taxableIncome <= 384e+6) {
        tax = taxableIncome * 0.2;
    }else if (taxableIncome > 384e+6 && taxableIncome <= 624e+6) {
        tax = taxableIncome * 0.25;
    }else if (taxableIncome > 624e+6 && taxableIncome <= 960e+6) {
        tax = taxableIncome * 0.3;
    }else if (taxableIncome > 960e+6) {
        tax = taxableIncome * 0.35;
    }else {
        alert("Xin vui lòng nhập đúng thông tin")
    }

    return tax;
};

function showTaxResult (result1) {
    document.getElementById("divTax").style.display = "block";
    document.getElementById("showTax").innerHTML = result1;
};

function calTax () {
    //đầu vào
    var fullName = document.getElementById("fullName").value;
    var yearlySalary = +document.getElementById("yearlySalary").value;
    var dependent = +document.getElementById("dependent").value;
    var tax = 0;

    //xử lý
    var taxableIncome = yearlySalary - 4e+6 - dependent * 16e+5;
    tax = preCalTax(taxableIncome);

    //format tien VND
    var vndFormat = new Intl.NumberFormat("VN-vn").format(tax)

    var result1 = "Họ tên: " + fullName + "<br/>" + "Tiền thuế thu nhập cá nhân: " + vndFormat + " VNĐ";

    //Đầu ra: xuất ra kết quả
    showTaxResult(result1)
};
