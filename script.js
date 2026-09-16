let activeTabId = 'wealth';
function switchTab(tabId) {
    activeTabId = tabId;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId + '-panel').classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
    runActiveCalculation();
}
function setPreset(inputId, value) {
    document.getElementById(inputId).value = value;
    runActiveCalculation();
}
function runActiveCalculation() {
    if(activeTabId === 'wealth') calculateWealth();
    if(activeTabId === 'body') calculateBody();
    if(activeTabId === 'travel') calculateTravel();
    if(activeTabId === 'fantasy') calculateFantasy();
}
function calculateWealth() {
    let usd = parseFloat(document.getElementById('cashInput').value) || 0;
    let denarii = usd / 3.5; 
    document.getElementById('romeCash').innerText = Math.round(denarii).toLocaleString() + " Silver Coins";
    document.getElementById('pirateCash').innerText = (usd / 400).toFixed(2) + " Gold Doubloons";
    document.getElementById('mughalCash').innerText = (usd / 500).toFixed(2) + " Gold Mohurs";
    let status = usd > 50000 ? "Wealthy Roman Emperor 👑" : (usd < 20 ? "Peasant" : "Merchant");
    document.getElementById('sharePreview').innerText = `💰 My money makes me a "${status}" in ancient history ($${usd} = ${Math.round(denarii)} Roman Denarii). Check your status:`;
}
function calculateBody() {
    let cm = parseFloat(document.getElementById('heightInput').value) || 0;
    let inchesTotal = cm / 2.54;
    document.getElementById('englandHeight').innerText = `${Math.floor(inchesTotal / 4)} Hands, ${Math.round(inchesTotal % 4)} Inches`;
    document.getElementById('vedicHeight').innerText = (cm / 180).toFixed(2) + " Dhanush";
    document.getElementById('japanHeight').innerText = (cm / 30.3).toFixed(2) + " Shaku";
    document.getElementById('sharePreview').innerText = `📏 I measure exactly ${Math.floor(inchesTotal / 4)} Hands tall in medieval units! What's your real structural height?`;
}
function calculateTravel() {
    let km = parseFloat(document.getElementById('distInput').value) || 0;
    document.getElementById('persiaDist').innerText = (km / 5.6).toFixed(2) + " Parasangs";
    document.getElementById('leagueDist').innerText = (km / 4.82).toFixed(2) + " Leagues";
    document.getElementById('sharePreview').innerText = `🏃 My daily route covers ${(km / 5.6).toFixed(1)} Parasangs across the Persian Empire! Track yours here:`;
}
function calculateFantasy() {
    let kg = parseFloat(document.getElementById('fantasyInput').value) || 0;
    let lbs = kg * 2.20462;
    document.getElementById('dndWeight').innerText = `Requires STR Score of ${Math.round(lbs / 15)} to carry`;
    document.getElementById('hobbitWeight').innerText = `${Math.floor(lbs / 14)} Stone, ${Math.round(lbs % 14)} lbs`;
    document.getElementById('sharePreview').innerText = `🧙 My fantasy body weight scales to exactly ${Math.floor(lbs / 14)} Stone in the Shire! See your custom specs:`;
}
function copyShareText() {
    navigator.clipboard.writeText(document.getElementById('sharePreview').innerText + " " + window.location.href);
    alert("Copied to clipboard! 🚀");
}
function shareTwitter() {
    window.open(`https://twitter.com{encodeURIComponent(document.getElementById('sharePreview').innerText + " " + window.location.href)}`, '_blank');
}
function shareWhatsApp() {
    window.open(`https://whatsapp.com{encodeURIComponent(document.getElementById('sharePreview').innerText + " " + window.location.href)}`, '_blank');
}
window.onload = function() { calculateWealth(); };
