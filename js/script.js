function calculate() {
    var calcType = document.getElementById('calc-type').value;
    var inputValue = parseFloat(document.getElementById('input-value').value);
    var ppnRate = parseFloat(document.getElementById('ppn-rate').value);
    var resultLabel = document.getElementById('result-label');
    var result = document.getElementById('result');
    
    if (calcType === 'ppn') {
      var ppn = inputValue * ppnRate; // PPN adalah persentase dari DPP
      resultLabel.textContent = "PPN:";
      result.textContent = ppn.toFixed(2);
    } else if (calcType === 'dpp') {
      var dpp = inputValue / (1 + ppnRate); // DPP adalah nilai setelah dikurangi PPN
      resultLabel.textContent = "DPP:";
      result.textContent = dpp.toFixed(2);
    }
  }
  