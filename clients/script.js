const navButtons = document.querySelectorAll('.sidebar button');
const searchInput = document.getElementById('search');

function badge(status) {
  if (status === 'Active') return `<span class="status green">${status}</span>`;
  if (status === 'Closed') return `<span class="status red">${status}</span>`;
  return `<span class="status orange">${status}</span>`;
}

function setActiveSection(sectionId) {
  document.querySelectorAll('.section').forEach((section) => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === sectionId);
  });
}

function renderSummaryCards() {
  document.getElementById('clientCount').textContent = clients.length;
  document.getElementById('caseCount').textContent = cases.length;
  document.getElementById('appointmentCount').textContent = appointments.length;
  document.getElementById('hearingCount').textContent = hearings.length;
}

function renderClientTable() {
  const html = clients
    .map(
      (client) => `
        <tr>
          <td>${client.name}</td>
          <td>${client.phone}</td>
          <td>${client.email}</td>
          <td>${client.lastMeeting}</td>
          <td>${badge(client.status)}</td>
        </tr>`
    )
    .join('');

  document.getElementById('clientTable').innerHTML = html;
}

function renderCaseTable() {
  const html = cases
    .map(
      (item) => `
        <tr>
          <td>${item.title}</td>
          <td>${item.client}</td>
          <td>${badge(item.status)}</td>
        </tr>`
    )
    .join('');

  document.getElementById('caseTable').innerHTML = html;
}

function renderAppointmentTable() {
  const html = appointments
    .map(
      (item) => `
        <tr>
          <td>${item.client}</td>
          <td>${item.date}</td>
          <td>${item.purpose}</td>
        </tr>`
    )
    .join('');

  document.getElementById('appointmentTable').innerHTML = html;
}

function renderHearingTable() {
  const html = hearings
    .map(
      (item) => `
        <tr>
          <td>${item.caseTitle}</td>
          <td>${item.date}</td>
          <td>${item.court}</td>
        </tr>`
    )
    .join('');

  document.getElementById('hearingTable').innerHTML = html;
}

function renderFileTable() {
  const html = files
    .map(
      (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.caseTitle}</td>
          <td>${item.type}</td>
        </tr>`
    )
    .join('');

  document.getElementById('fileTable').innerHTML = html;
}

function searchData() {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll('tbody tr').forEach((row) => {
    row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
  });
}

function bindEvents() {
  navButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveSection(button.dataset.target));
  });

  searchInput.addEventListener('input', searchData);
}

function init() {
  renderSummaryCards();
  renderClientTable();
  renderCaseTable();
  renderAppointmentTable();
  renderHearingTable();
  renderFileTable();
  bindEvents();
  setActiveSection('dashboard');
}

init();
