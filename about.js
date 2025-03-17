function showDetails(name, position, description) {
    const detailText = document.getElementById('detail-text');
    detailText.innerHTML = `<strong>${name}</strong> (${position}): ${description}`;
}