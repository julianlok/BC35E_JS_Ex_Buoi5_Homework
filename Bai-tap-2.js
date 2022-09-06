function preCalCable (connect,channelNo) {
    var kindOfCustomer = document.getElementById("kindOfCustomer").value;
    var enterpriseService = 0;
    var totalAmount = 0;

    switch (kindOfCustomer) {
        case "civilian":
            totalAmount = (channelNo * 7.5) + 20.5 + 4.5;
            break;

        case "enterprise":
            if (connect > 0 && connect <= 10) {
                enterpriseService = 75;
                totalAmount = (channelNo * 50) + enterpriseService + 15;
            }else if (connect > 10) {
                enterpriseService = 75 + (connect - 10) * 5;
                totalAmount = (channelNo * 50) + enterpriseService + 15;
            }
            break;
        default:
            alert("Xin vui lòng chọn loại khách hàng")
            break;
    }
    return totalAmount;
}

function showCableResult (result2) {
    document.getElementById("divCable").style.display = "block";
    document.getElementById("showCable").innerHTML = result2;
}

function calCable() {
    //đầu vào
    var cusCode = document.getElementById("cusCode").value;
    var channelNo = +document.getElementById("channelNo").value;
    var connect = +document.getElementById("connect").value;
    var calCable = 0;
    var result2 = "";

    //xử lý
    calCable = preCalCable(connect,channelNo);
    
    // USD format
    calCable = new Intl.NumberFormat("en-US").format(calCable);
    result2 = "Mã khách hàng: " + cusCode + "<br>" + "Tiền cáp: " + "$" + calCable;

    //đầu ra in ra kết quả
    showCableResult (result2)
}




















function hideInputConnect() {
    var e = document.getElementById("kindOfCustomer").value;
    document.getElementById("connect").style.display = "enterprise" == e ? "block" : "none";
}


