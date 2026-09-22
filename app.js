const stageOrder = [
  { key: 'student', label: 'Student Submitted' },
  { key: 'tutor', label: 'Class Tutor' },
  { key: 'hod', label: 'HOD' },
  { key: 'dean', label: 'Dean' },
  { key: 'deputy', label: 'Deputy Chief Warden' },
  { key: 'chief', label: 'Chief Warden' },
  { key: 'principal', label: 'Principal' },
  { key: 'final', label: 'Final Decision' }
];

const roles = {
  student: { label: 'Student', name: 'Arun Kumar', reg: 'BCA2026001', dashboardTitle: 'Student Dashboard' },
  tutor: { label: 'Class Tutor', name: 'Demo Tutor', reg: 'TUTOR-01', dashboardTitle: 'Class Tutor Dashboard' },
  hod: { label: 'Department HOD', name: 'Demo HOD', reg: 'HOD-01', dashboardTitle: 'HOD Dashboard' },
  dean: { label: 'Dean', name: 'Demo Dean', reg: 'DEAN-01', dashboardTitle: 'Dean Dashboard' },
  deputy: { label: 'Deputy Chief Warden', name: 'Demo Deputy Warden', reg: 'DW-01', dashboardTitle: 'Deputy Chief Warden Dashboard' },
  chief: { label: 'Chief Warden', name: 'Demo Chief Warden', reg: 'CW-01', dashboardTitle: 'Chief Warden Dashboard' },
  principal: { label: 'Principal', name: 'Demo Principal', reg: 'PRIN-01', dashboardTitle: 'Principal Dashboard' },
  admin: { label: 'System Administrator', name: 'System Administrator', reg: 'ADMIN-01', dashboardTitle: 'Administrator Dashboard' }
};

const state = {
  user: null,
  page: 'login',
  settings: {
    dean: true,
    chief: false
  },
  toast: null,
  selectedApplicationId: 'HLMS-2026-001',
  search: ''
};

const demoApplications = [
  {
    id: 'HLMS-2026-001',
    student: 'Arun Kumar',
    reg: 'BCA2026001',
    dept: 'BCA',
    className: '1st BCA B',
    year: 'First Year',
    hostel: 'Boys Hostel',
    room: '204',
    phone: '98765 11111',
    parentName: 'Ravi Kumar',
    parentPhone: '98765 43210',
    emergency: '98765 99999',
    leaveType: 'Home Visit',
    from: '2026-09-25',
    fromTime: '16:00',
    to: '2026-09-28',
    returnTime: '18:00',
    destination: 'Coimbatore',
    reason: 'Family function and weekend visit.',
    urgent: false,
    doc: 'guardian-note.pdf',
    status: 'Pending',
    currentStage: 'tutor',
    lastUpdated: '22 Sep 2026, 08:30 AM',
    approvalAuthority: 'Class Tutor',
    urgentAuthorized: false,
    parentVerification: {
      contacted: 'Yes',
      method: 'Phone call',
      confirmed: 'Yes',
      remarks: 'Parent confirmed the leave and approved the travel schedule.',
      verifiedAt: '22 Sep 2026, 08:45 AM'
    },
    audit: [
      { actor: 'Student', role: 'Student', action: 'Application submitted', date: '22 Sep 2026, 08:30 AM' },
      { actor: 'Class Tutor', role: 'Class Tutor', action: 'Parent verified', date: '22 Sep 2026, 08:45 AM' },
      { actor: 'Student', role: 'Student', action: 'Application received in queue', date: '22 Sep 2026, 08:46 AM' }
    ]
  },
  {
    id: 'HLMS-2026-002',
    student: 'Priya Nair',
    reg: 'BCA2026002',
    dept: 'BCA',
    className: '1st BCA B',
    year: 'First Year',
    hostel: 'Girls Hostel',
    room: '115',
    phone: '98967 22111',
    parentName: 'Sunil Nair',
    parentPhone: '98967 99882',
    emergency: '98967 20000',
    leaveType: 'Personal',
    from: '2026-09-27',
    fromTime: '09:00',
    to: '2026-09-29',
    returnTime: '17:30',
    destination: 'Kochi',
    reason: 'Personal travel for family commitment.',
    urgent: false,
    doc: 'none',
    status: 'Pending',
    currentStage: 'hod',
    lastUpdated: '22 Sep 2026, 09:10 AM',
    approvalAuthority: 'HOD',
    parentVerification: {
      contacted: 'Yes',
      method: 'Phone call',
      confirmed: 'Yes',
      remarks: 'Parent confirmed the travel plan.',
      verifiedAt: '22 Sep 2026, 09:00 AM'
    },
    audit: [
      { actor: 'Student', role: 'Student', action: 'Application submitted', date: '22 Sep 2026, 09:04 AM' },
      { actor: 'Class Tutor', role: 'Class Tutor', action: 'Tutor approved and sent to HOD', date: '22 Sep 2026, 09:06 AM' }
    ]
  },
  {
    id: 'HLMS-2026-003',
    student: 'Rohit S',
    reg: 'BBA2026034',
    dept: 'BBA',
    className: '2nd BBA A',
    year: 'Second Year',
    hostel: 'Boys Hostel',
    room: '318',
    phone: '90012 88990',
    parentName: 'Suresh S',
    parentPhone: '90012 77122',
    emergency: '90012 88999',
    leaveType: 'Emergency',
    from: '2026-09-23',
    fromTime: '12:00',
    to: '2026-09-24',
    returnTime: '13:30',
    destination: 'Thiruvananthapuram',
    reason: 'Emergency family issue and hospital visit.',
    urgent: true,
    doc: 'medical-report.pdf',
    status: 'Urgent',
    currentStage: 'deputy',
    lastUpdated: '22 Sep 2026, 10:05 AM',
    approvalAuthority: 'Deputy Chief Warden',
    parentVerification: {
      contacted: 'Yes',
      method: 'Phone call',
      confirmed: 'Yes',
      remarks: 'Parent confirmed the emergency and authorized the leave.',
      verifiedAt: '22 Sep 2026, 10:14 AM'
    },
    urgentAuthorization: {
      who: 'Demo Deputy Warden',
      result: 'Authorized under urgent-leave procedure',
      date: '22 Sep 2026',
      time: '10:16 AM',
      remarks: 'Urgent leave approved after parent confirmation.'
    },
    audit: [
      { actor: 'Student', role: 'Student', action: 'Urgent leave application submitted', date: '22 Sep 2026, 10:00 AM' },
      { actor: 'Deputy Chief Warden', role: 'Deputy Chief Warden', action: 'Urgent authorization recorded', date: '22 Sep 2026, 10:16 AM' }
    ]
  }
];

let apps = JSON.parse(JSON.stringify(demoApplications));

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function initials(name) {
  return name.split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

function statusBadge(text, tone = 'pending') {
  const map = {
    pending: 'status pending',
    review: 'status review',
    approved: 'status approved',
    rejected: 'status rejected',
    urgent: 'status urgent',
    cancelled: 'status cancelled'
  };
  return `<span class="${map[tone] || map.pending}">${escapeHtml(text)}</span>`;
}

function formatAppTableRows(list) {
  return list.map((app) => {
    const appStatus = app.urgent ? 'Urgent Leave' : app.status;
    const statusTone = app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : app.status.toLowerCase().includes('pending') ? 'pending' : app.status.toLowerCase().includes('review') ? 'review' : 'cancelled';
    return `
      <tr>
        <td><div class="table-id">${escapeHtml(app.id)}</div><div class="muted">${escapeHtml(app.student)} · ${escapeHtml(app.reg)}</div></td>
        <td>${escapeHtml(app.leaveType)}</td>
        <td>${escapeHtml(app.from)}<br><span class="muted">to ${escapeHtml(app.to)}</span></td>
        <td><span class="table-stage">${escapeHtml(app.currentStage || 'Pending')}</span></td>
        <td>${statusBadge(appStatus, statusTone)}</td>
        <td><button class="btn btn-light" onclick="openApp('${app.id}')">View</button></td>
      </tr>
    `;
  }).join('');
}

function layoutPage(title, body, activeNav = 'dashboard') {
  const navItems = getNavigation(state.user, activeNav);
  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-box">
          <div class="brand-logo">HL<br>MS</div>
          <div>
            <div class="brand-name">HLMS</div>
            <div class="brand-sub">Hostel Leave System</div>
          </div>
        </div>

        <div class="nav-section-title">Workspace</div>
        ${navItems.map(item => `
          <button class="nav-item ${item.active ? 'active' : ''}" onclick="goToPage('${item.page}')">
            <span class="nav-icon">${item.icon}</span>
            <span>${item.label}</span>
            ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
          </button>
        `).join('')}

        <div class="side-footer">
          <div class="mini-user">
            <div class="mini-avatar">${initials(roles[state.user].name)}</div>
            <div>
              <strong>${escapeHtml(roles[state.user].name)}</strong>
              <span>${escapeHtml(roles[state.user].label)}</span>
            </div>
          </div>
          <button class="nav-item logout-item" onclick="logout()">
            <span class="nav-icon">↪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main class="main-panel">
        <header class="topbar">
          <div class="crumbs">
            <button class="mobile-menu" onclick="toggleMobileMenu()">☰</button>
            <strong>${escapeHtml(title)}</strong>
            <span> / HLMS workspace</span>
          </div>
          <div class="top-actions">
            <button class="icon-btn" onclick="goToPage('notifications')">
              🔔
              <span class="icon-badge">3</span>
            </button>
            <div class="user-pill">${initials(roles[state.user].name)}</div>
          </div>
        </header>
        <div class="page-body">${body}</div>
      </main>
    </div>
  `;
}

function getNavigation(user, active) {
  if (!user) return [];

  const common = [
    { page: 'dashboard', label: 'Dashboard', icon: '⌂', active: active === 'dashboard' },
    { page: 'notifications', label: 'Notifications', icon: '🔔', badge: 3, active: active === 'notifications' }
  ];

  if (user === 'student') {
    return [
      { page: 'dashboard', label: 'Dashboard', icon: '⌂', active: active === 'dashboard' },
      { page: 'apply', label: 'Apply for Leave', icon: '＋', active: active === 'apply' },
      { page: 'applications', label: 'My Applications', icon: '▣', active: active === 'applications' },
      { page: 'profile', label: 'Profile', icon: '👤', active: active === 'profile' },
      { page: 'notifications', label: 'Notifications', icon: '🔔', badge: 3, active: active === 'notifications' }
    ];
  }

  if (user === 'admin') {
    return [
      { page: 'dashboard', label: 'Dashboard', icon: '⌂', active: active === 'dashboard' },
      { page: 'users', label: 'User Management', icon: '👥', active: active === 'users' },
      { page: 'settings', label: 'Approval Settings', icon: '⚙', active: active === 'settings' },
      { page: 'reports', label: 'Reports', icon: '▤', active: active === 'reports' },
      { page: 'audit', label: 'Audit Logs', icon: '🧾', active: active === 'audit' },
      { page: 'notifications', label: 'Notifications', icon: '🔔', badge: 3, active: active === 'notifications' }
    ];
  }

  return [
    { page: 'dashboard', label: 'Dashboard', icon: '⌂', active: active === 'dashboard' },
    { page: 'queue', label: 'Approval Queue', icon: '▣', active: active === 'queue' },
    { page: 'notifications', label: 'Notifications', icon: '🔔', badge: 3, active: active === 'notifications' }
  ];
}

function topHeader(title, subtitle, primaryLabel, primaryAction) {
  return `
    <div class="welcome-row">
      <div>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      ${primaryLabel ? `<button class="btn btn-primary" onclick="${primaryAction}">${escapeHtml(primaryLabel)}</button>` : ''}
    </div>
  `;
}

function statsCards(cards) {
  return `
    <div class="stats-grid">
      ${cards.map(card => `
        <div class="stat-card">
          <div class="stat-label">${escapeHtml(card.label)}</div>
          <div class="stat-value">${escapeHtml(card.value)}</div>
          <div class="stat-icon">${card.icon}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function panel(title, extras, content) {
  return `
    <div class="panel">
      <div class="panel-head">
        <h3>${escapeHtml(title)}</h3>
        ${extras || ''}
      </div>
      ${content}
    </div>
  `;
}

function userInfoSummary(app) {
  return `
    <div class="info-grid detail-grid">
      <div class="detail-box"><small>Student name</small><strong>${escapeHtml(app.student)}</strong></div>
      <div class="detail-box"><small>Register number</small><strong>${escapeHtml(app.reg)}</strong></div>
      <div class="detail-box"><small>Department</small><strong>${escapeHtml(app.dept)}</strong></div>
      <div class="detail-box"><small>Class</small><strong>${escapeHtml(app.className)}</strong></div>
      <div class="detail-box"><small>Year</small><strong>${escapeHtml(app.year)}</strong></div>
      <div class="detail-box"><small>Hostel / room</small><strong>${escapeHtml(app.hostel)} · ${escapeHtml(app.room)}</strong></div>
      <div class="detail-box"><small>Phone</small><strong>${escapeHtml(app.phone)}</strong></div>
      <div class="detail-box"><small>Parent / guardian</small><strong>${escapeHtml(app.parentName)}</strong></div>
      <div class="detail-box"><small>Parent phone</small><strong>${escapeHtml(app.parentPhone)}</strong></div>
    </div>
  `;
}

function getQueueAppsForRole(role) {
  if (role === 'student') return apps.filter(app => app.student === 'Arun Kumar');
  if (role === 'tutor') return apps.filter(app => app.currentStage === 'tutor');
  if (role === 'hod') return apps.filter(app => app.currentStage === 'hod');
  if (role === 'dean') return apps.filter(app => app.currentStage === 'dean');
  if (role === 'deputy') return apps.filter(app => app.currentStage === 'deputy');
  if (role === 'chief') return apps.filter(app => app.currentStage === 'chief');
  if (role === 'principal') return apps.filter(app => app.currentStage === 'principal');
  return apps;
}

function renderLoginPage() {
  return `
    <div class="login-layout">
      <div class="login-hero">
        <div class="brand-row">
          <div class="brand-logo big">HL<br>MS</div>
          <div>
            <div class="brand-name">HLMS</div>
            <div class="brand-sub">Hostel Leave Management System</div>
          </div>
        </div>
        <h1>Leave management with clarity.</h1>
        <p>A secure and sequential approval workflow for hostel leave requests, student verification and authority decisions.</p>
        <div class="hero-tag">PROTOTYPE · DEMO ENVIRONMENT</div>
      </div>

      <div class="login-panel">
        <div class="panel login-panel-inner">
          <h2>Welcome back</h2>
          <p class="muted-text">Sign in to your HLMS workspace</p>

          <div class="field">
            <label>Username / Register Number</label>
            <input type="text" value="BCA2026001" placeholder="Enter username or register number" />
          </div>

          <div class="field">
            <label>Password</label>
            <input type="password" value="demo123" placeholder="Enter password" />
          </div>

          <div class="field">
            <label>Role</label>
            <select>
              <option>Student</option>
              <option>Class Tutor</option>
              <option>Department HOD</option>
              <option>Dean</option>
              <option>Deputy Chief Warden</option>
              <option>Chief Warden</option>
              <option>Principal</option>
              <option>System Administrator</option>
            </select>
          </div>

          <button class="btn btn-primary full-width" onclick="loginAs('student')">Sign in to workspace</button>

          <div class="demo-divider">DEMO ACCOUNTS</div>
          <div class="demo-grid">
            <button class="demo-btn" onclick="loginAs('student')"><strong>Student</strong><span>Arun Kumar</span></button>
            <button class="demo-btn" onclick="loginAs('tutor')"><strong>Class Tutor</strong><span>Demo Tutor</span></button>
            <button class="demo-btn" onclick="loginAs('hod')"><strong>HOD</strong><span>Demo HOD</span></button>
            <button class="demo-btn" onclick="loginAs('dean')"><strong>Dean</strong><span>Demo Dean</span></button>
            <button class="demo-btn" onclick="loginAs('deputy')"><strong>Deputy Warden</strong><span>Demo Deputy Warden</span></button>
            <button class="demo-btn" onclick="loginAs('chief')"><strong>Chief Warden</strong><span>Demo Chief Warden</span></button>
            <button class="demo-btn" onclick="loginAs('principal')"><strong>Principal</strong><span>Demo Principal</span></button>
            <button class="demo-btn" onclick="loginAs('admin')"><strong>Admin</strong><span>System Administrator</span></button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loginAs(role) {
  state.user = role;
  state.page = 'dashboard';
  renderApp();
}

function logout() {
  state.user = null;
  state.page = 'login';
  renderApp();
}

function goToPage(page) {
  state.page = page;
  renderApp();
}

function openApp(appId) {
  state.selectedApplicationId = appId;
  state.page = state.user === 'student' ? 'detail' : 'review';
  renderApp();
}

function toggleMobileMenu() {
  document.querySelector('.sidebar').classList.toggle('mobile-open');
}

function showToast(message) {
  state.toast = message;
  renderApp();
  setTimeout(() => {
    state.toast = null;
    renderApp();
  }, 2200);
}

function getCurrentApp() {
  return apps.find(app => app.id === state.selectedApplicationId) || apps[0];
}

function buildTimeline(app) {
  const isDeanEnabled = state.settings.dean;
  const isChiefEnabled = state.settings.chief;
  const stages = [
    { key: 'student', label: 'Student Submitted' },
    { key: 'tutor', label: 'Class Tutor' },
    { key: 'hod', label: 'HOD' },
    { key: 'dean', label: 'Dean (Optional)' },
    { key: 'deputy', label: 'Deputy Chief Warden' },
    { key: 'chief', label: 'Chief Warden (Optional)' },
    { key: 'principal', label: 'Principal' },
    { key: 'final', label: 'Final Decision' }
  ];

  const decisionMap = {
    student: 'submitted',
    tutor: app.approvals && app.approvals.tutor ? app.approvals.tutor : '',
    hod: app.approvals && app.approvals.hod ? app.approvals.hod : '',
    dean: app.approvals && app.approvals.dean ? app.approvals.dean : '',
    deputy: app.approvals && app.approvals.deputy ? app.approvals.deputy : '',
    chief: app.approvals && app.approvals.chief ? app.approvals.chief : '',
    principal: app.approvals && app.approvals.principal ? app.approvals.principal : '',
    final: app.status === 'Approved' ? 'approved' : app.status === 'Rejected' ? 'rejected' : ''
  };

  return stages.map((stage, index) => {
    let stateClass = 'waiting';
    let marker = index + 1;

    if (stage.key === 'dean' && !isDeanEnabled) {
      stateClass = 'skipped';
      marker = '–';
    } else if (stage.key === 'chief' && !isChiefEnabled) {
      stateClass = 'skipped';
      marker = '–';
    } else if (stage.key === 'student') {
      stateClass = 'done';
      marker = '✓';
    } else if (stage.key === app.currentStage && app.status !== 'Approved' && app.status !== 'Rejected') {
      stateClass = 'current';
      marker = '•';
    } else if (decisionMap[stage.key] === 'approved') {
      stateClass = 'done';
      marker = '✓';
    } else if (decisionMap[stage.key] === 'rejected') {
      stateClass = 'rejected';
      marker = '✕';
    }

    const labels = {
      waiting: 'Waiting',
      done: 'Approved',
      current: 'Current stage',
      rejected: 'Rejected',
      skipped: 'Skipped'
    };

    return `
      <div class="timeline-step ${stateClass}">
        <div class="timeline-dot">${marker}</div>
        <div class="timeline-label">${escapeHtml(stage.label)}</div>
        <div class="timeline-meta">${labels[stateClass]}</div>
      </div>
    `;
  }).join('');
}

function buildDashboard() {
  const currentUser = state.user;

  if (currentUser === 'student') {
    const myApps = apps.filter(app => app.student === 'Arun Kumar');
    const total = myApps.length;
    const pending = myApps.filter(app => app.status === 'Pending' || app.status === 'Under Review').length;
    const approved = myApps.filter(app => app.status === 'Approved').length;
    const rejected = myApps.filter(app => app.status === 'Rejected').length;

    return layoutPage('Student Dashboard', `
      ${topHeader('Good morning, Arun 👋', 'Your leave activity and approvals at a glance.', '+ Apply for Leave', "goToPage('apply')")}
      ${statsCards([
        { label: 'Total Applications', value: total, icon: '▣' },
        { label: 'Pending Applications', value: pending, icon: '⏳' },
        { label: 'Approved Applications', value: approved, icon: '✓' },
        { label: 'Rejected Applications', value: rejected, icon: '✕' }
      ])}
      ${panel('Recent applications', '<button class="btn btn-light" onclick="goToPage(\'applications\')">View all →</button>', `
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Leave type</th>
                <th>From date</th>
                <th>To date</th>
                <th>Status</th>
                <th>Current authority</th>
                <th>Last updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${formatAppTableRows(myApps)}
            </tbody>
          </table>
        </div>
      `)}
    `, 'dashboard');
  }

  if (currentUser === 'admin') {
    const totalStudents = 248;
    const totalApplications = apps.length;
    const pending = apps.filter(app => app.status === 'Pending' || app.status === 'Under Review').length;
    const approved = apps.filter(app => app.status === 'Approved').length;
    const rejected = apps.filter(app => app.status === 'Rejected').length;
    const urgent = apps.filter(app => app.urgent).length;

    return layoutPage('Administrator Dashboard', `
      ${topHeader('System overview', 'Monitor hostel leave workflow, approval health and user activity.', 'Approval Settings', "goToPage('settings')")}
      ${statsCards([
        { label: 'Total students', value: totalStudents, icon: '👥' },
        { label: 'Total applications', value: totalApplications, icon: '▣' },
        { label: 'Pending applications', value: pending, icon: '⏳' },
        { label: 'Urgent applications', value: urgent, icon: '⚠' }
      ])}
      <div class="two-col">
        ${panel('Applications waiting by authority', '', `
          <div class="authority-list">
            <div class="authority-row"><span>Class Tutor</span><strong>4</strong></div>
            <div class="authority-row"><span>HOD</span><strong>3</strong></div>
            <div class="authority-row"><span>Dean</span><strong>2</strong></div>
            <div class="authority-row"><span>Deputy Chief Warden</span><strong>3</strong></div>
            <div class="authority-row"><span>Chief Warden</span><strong>1</strong></div>
            <div class="authority-row"><span>Principal</span><strong>2</strong></div>
          </div>
        `)}
        ${panel('Latest applications', '', `
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Application</th>
                  <th>Student</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${apps.map(app => `
                  <tr>
                    <td>${escapeHtml(app.id)}</td>
                    <td>${escapeHtml(app.student)}</td>
                    <td>${statusBadge(app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : 'pending')}</td>
                    <td><button class="btn btn-light" onclick="openApp('${app.id}')">Open</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `)}
      </div>
    `, 'dashboard');
  }

  const roleStats = [
    { label: 'Pending applications', value: getQueueAppsForRole(currentUser).length, icon: '⏳' },
    { label: 'Approved today', value: '0', icon: '✓' },
    { label: 'Rejected applications', value: '0', icon: '✕' },
    { label: 'Urgent requests', value: getQueueAppsForRole(currentUser).filter(app => app.urgent).length, icon: '⚠' }
  ];

  return layoutPage(`${roles[currentUser].dashboardTitle}`, `
    ${topHeader(`Welcome, ${roles[currentUser].name}`, 'Review and act on applications assigned to your approval stage.', '', '')}
    ${statsCards(roleStats)}
    ${panel('Applications requiring your action', `<span class="muted">${getQueueAppsForRole(currentUser).length} pending</span>`, `
      ${getQueueAppsForRole(currentUser).length ? `
        <div class="table-wrap"><table><thead>...` : '<div class="empty-state">No applications are currently waiting at your stage.</div>' }
    `)}
  `, 'dashboard');
}

function renderPendingAuthorityTable(items) {
  if (!items.length) return '<div class="empty-state">No applications are currently waiting at your stage.</div>';

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Application</th>
            <th>Student</th>
            <th>Leave type</th>
            <th>Status</th>
            <th>Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${items.map(app => `
            <tr>
              <td>${escapeHtml(app.id)}</td>
              <td>${escapeHtml(app.student)}<br><span class="muted">${escapeHtml(app.reg)}</span></td>
              <td>${escapeHtml(app.leaveType)}</td>
              <td>${statusBadge(app.urgent ? 'Urgent Leave' : app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : 'pending')}</td>
              <td>${escapeHtml(app.lastUpdated)}</td>
              <td><button class="btn btn-light" onclick="openApp('${app.id}')">Open</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderAuthorityDashboard() {
  const role = state.user;
  const queue = getQueueAppsForRole(role);
  return layoutPage(roles[role].dashboardTitle, `
    ${topHeader(`Welcome, ${roles[role].name}`, 'Review and manage applications assigned to this stage.', '', '')}
    ${statsCards([
      { label: 'Pending applications', value: queue.length, icon: '⏳' },
      { label: 'Approved today', value: '0', icon: '✓' },
      { label: 'Rejected applications', value: '0', icon: '✕' },
      { label: 'Urgent requests', value: queue.filter(app => app.urgent).length, icon: '⚠' }
    ])}
    ${panel('Applications requiring your action', `<span class="muted">${queue.length} pending</span>`, renderPendingAuthorityTable(queue))}
  `, 'dashboard');
}

function renderStudentApplyPage() {
  return layoutPage('Apply for Leave', `
    ${topHeader('New leave application', 'Student details are auto-filled from the profile. All required fields should be completed before submission.', '', '')}
    <div class="panel">
      <div class="panel-head">
        <h3>Student information</h3>
        <span class="muted">Profile source</span>
      </div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Student name</small><strong>Arun Kumar</strong></div>
        <div class="detail-box"><small>Register number</small><strong>BCA2026001</strong></div>
        <div class="detail-box"><small>Department</small><strong>BCA</strong></div>
        <div class="detail-box"><small>Class</small><strong>1st BCA B</strong></div>
        <div class="detail-box"><small>Year</small><strong>First Year</strong></div>
        <div class="detail-box"><small>Hostel</small><strong>Boys Hostel</strong></div>
        <div class="detail-box"><small>Room number</small><strong>204</strong></div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h3>Leave information</h3>
        <span class="muted">Required fields</span>
      </div>
      <div class="form-grid">
        <div class="field">
          <label>Leave type</label>
          <select id="leaveType">
            <option>Home Visit</option>
            <option>Personal</option>
            <option>Medical</option>
            <option>Emergency</option>
            <option>Other</option>
          </select>
        </div>
        <div class="field">
          <label>Destination</label>
          <input type="text" id="destination" value="Coimbatore" />
        </div>
        <div class="field">
          <label>From date</label>
          <input type="date" id="fromDate" value="2026-09-25" />
        </div>
        <div class="field">
          <label>From time</label>
          <input type="time" id="fromTime" value="16:00" />
        </div>
        <div class="field">
          <label>To date</label>
          <input type="date" id="toDate" value="2026-09-28" />
        </div>
        <div class="field">
          <label>Expected return time</label>
          <input type="time" id="returnTime" value="18:00" />
        </div>
        <div class="field full-width">
          <label>Reason for leave</label>
          <textarea id="reason">Family function and weekend visit.</textarea>
        </div>
        <div class="field full-width">
          <label>Supporting document</label>
          <input type="file" id="docUpload" />
        </div>
      </div>

      <div class="urgent-box">
        <div class="urgent-title">Is this an urgent leave request?</div>
        <div class="radio-group">
          <label><input type="radio" name="urgentFlag" value="no" checked> NO</label>
          <label><input type="radio" name="urgentFlag" value="yes"> YES</label>
        </div>
        <div class="urgent-note">This request may be handled through the urgent-leave procedure by the Deputy Chief Warden.</div>
      </div>

      <div class="button-row right">
        <button class="btn btn-light" onclick="goToPage('dashboard')">Cancel</button>
        <button class="btn btn-primary" onclick="submitLeaveApplication()">Submit Leave Application</button>
      </div>
    </div>
  `, 'apply');
}

function submitLeaveApplication() {
  const urgent = document.querySelector('input[name="urgentFlag"]:checked').value === 'yes';
  const newApp = {
    id: `HLMS-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900 + 100)).padStart(3, '0')}`,
    student: 'Arun Kumar',
    reg: 'BCA2026001',
    dept: 'BCA',
    className: '1st BCA B',
    year: 'First Year',
    hostel: 'Boys Hostel',
    room: '204',
    phone: '98765 11111',
    parentName: 'Ravi Kumar',
    parentPhone: '98765 43210',
    emergency: '98765 99999',
    leaveType: document.getElementById('leaveType').value,
    from: document.getElementById('fromDate').value,
    fromTime: document.getElementById('fromTime').value,
    to: document.getElementById('toDate').value,
    returnTime: document.getElementById('returnTime').value,
    destination: document.getElementById('destination').value,
    reason: document.getElementById('reason').value,
    urgent,
    doc: document.getElementById('docUpload').files[0]?.name || 'no file attached',
    status: urgent ? 'Urgent' : 'Pending',
    currentStage: urgent ? 'deputy' : 'tutor',
    lastUpdated: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    approvalAuthority: urgent ? 'Deputy Chief Warden' : 'Class Tutor',
    parentVerification: {
      contacted: 'Yes',
      method: 'Phone call',
      confirmed: 'Pending',
      remarks: '',
      verifiedAt: ''
    },
    audit: [{ actor: 'Student', role: 'Student', action: urgent ? 'Urgent leave application submitted' : 'Application submitted', date: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) }],
    approvals: {}
  };

  apps.unshift(newApp);
  state.selectedApplicationId = newApp.id;
  state.page = 'detail';
  showToast('Application submitted successfully');
  renderApp();
}

function renderStudentApplicationsPage() {
  const myApps = apps.filter(app => app.student === 'Arun Kumar');
  return layoutPage('My Applications', `
    ${topHeader('My applications', 'Track every leave request and its current approval status.', '+ Apply for Leave', "goToPage('apply')")}
    ${panel('All applications', '', `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Leave type</th>
              <th>From date</th>
              <th>To date</th>
              <th>Current status</th>
              <th>Current authority</th>
              <th>Last updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${myApps.map(app => `
              <tr>
                <td>${escapeHtml(app.id)}</td>
                <td>${escapeHtml(app.leaveType)}</td>
                <td>${escapeHtml(app.from)}</td>
                <td>${escapeHtml(app.to)}</td>
                <td>${statusBadge(app.urgent ? 'Urgent Leave' : app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : app.status.toLowerCase().includes('pending') ? 'pending' : 'review')}</td>
                <td>${escapeHtml(app.approvalAuthority || 'Awaiting assignment')}</td>
                <td>${escapeHtml(app.lastUpdated)}</td>
                <td><button class="btn btn-light" onclick="openApp('${app.id}')">View</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `)}
  `, 'applications');
}

function renderStudentProfilePage() {
  return layoutPage('Student Profile', `
    ${topHeader('Student profile', 'Your personal and hostel details are maintained as read-only information.', '', '')}
    <div class="panel">
      <div class="panel-head">
        <h3>Profile details</h3>
        <span class="muted">Read-only</span>
      </div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Student name</small><strong>Arun Kumar</strong></div>
        <div class="detail-box"><small>Register number</small><strong>BCA2026001</strong></div>
        <div class="detail-box"><small>Department</small><strong>BCA</strong></div>
        <div class="detail-box"><small>Class</small><strong>1st BCA B</strong></div>
        <div class="detail-box"><small>Year</small><strong>First Year</strong></div>
        <div class="detail-box"><small>Hostel name</small><strong>Boys Hostel</strong></div>
        <div class="detail-box"><small>Room number</small><strong>204</strong></div>
        <div class="detail-box"><small>Student phone number</small><strong>98765 11111</strong></div>
        <div class="detail-box"><small>Parent / guardian name</small><strong>Ravi Kumar</strong></div>
        <div class="detail-box"><small>Parent phone number</small><strong>98765 43210</strong></div>
        <div class="detail-box"><small>Emergency contact</small><strong>98765 99999</strong></div>
      </div>
    </div>
  `, 'profile');
}

function renderApplicationDetailPage() {
  const app = getCurrentApp();
  const timeline = buildTimeline(app);

  return layoutPage('Application Details', `
    <div class="detail-header">
      <div>
        <h1>${escapeHtml(app.id)}</h1>
        <p>${escapeHtml(app.student)} · ${escapeHtml(app.dept)} · ${escapeHtml(app.leaveType)}</p>
      </div>
      ${statusBadge(app.urgent ? 'Urgent Leave' : app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : app.status.toLowerCase().includes('pending') ? 'pending' : 'review')}
    </div>

    ${app.urgent ? `<div class="notice urgent-notice"><strong>URGENT LEAVE REQUEST</strong><br>This request may be handled through the urgent-leave procedure by the Deputy Chief Warden.</div>` : ''}

    <div class="panel">
      <div class="panel-head">
        <h3>Approval timeline</h3>
        <span class="muted">Sequential workflow</span>
      </div>
      <div class="timeline">${timeline}</div>
    </div>

    <div class="two-col">
      <div class="panel">
        <div class="panel-head"><h3>Student details</h3></div>
        ${userInfoSummary(app)}
      </div>

      <div class="panel">
        <div class="panel-head"><h3>Leave details</h3></div>
        <div class="info-grid detail-grid">
          <div class="detail-box"><small>Leave type</small><strong>${escapeHtml(app.leaveType)}</strong></div>
          <div class="detail-box"><small>Destination</small><strong>${escapeHtml(app.destination)}</strong></div>
          <div class="detail-box"><small>From date</small><strong>${escapeHtml(app.from)} · ${escapeHtml(app.fromTime)}</strong></div>
          <div class="detail-box"><small>To date</small><strong>${escapeHtml(app.to)} · ${escapeHtml(app.returnTime)}</strong></div>
          <div class="detail-box full-span"><small>Reason</small><strong>${escapeHtml(app.reason)}</strong></div>
          <div class="detail-box"><small>Document</small><strong>${escapeHtml(app.doc)}</strong></div>
        </div>
      </div>
    </div>

    <div class="two-col">
      <div class="panel">
        <div class="panel-head"><h3>Parent information</h3></div>
        <div class="info-grid detail-grid">
          <div class="detail-box"><small>Parent / guardian</small><strong>${escapeHtml(app.parentName)}</strong></div>
          <div class="detail-box"><small>Parent phone</small><strong>${escapeHtml(app.parentPhone)}</strong></div>
          <div class="detail-box"><small>Emergency contact</small><strong>${escapeHtml(app.emergency)}</strong></div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><h3>Application history</h3></div>
        <div class="history-list">
          ${app.audit.map(item => `
            <div class="history-item">
              <strong>${escapeHtml(item.action)}</strong>
              <div class="muted">${escapeHtml(item.actor)} · ${escapeHtml(item.role)} · ${escapeHtml(item.date)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `, 'dashboard');
}

function renderTutorReviewPage() {
  const app = getCurrentApp();
  return layoutPage('Tutor Review', `
    ${topHeader('Review application', 'The tutor must explicitly verify parent contact before approving.', '', '')}
    ${app.urgent ? `<div class="notice urgent-notice"><strong>URGENT LEAVE REQUEST</strong> · This application requires urgent processing.</div>` : ''}
    <div class="panel">
      <div class="panel-head">
        <h3>${escapeHtml(app.id)} · ${escapeHtml(app.student)}</h3>
        ${statusBadge(app.urgent ? 'Urgent Leave' : app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : 'pending')}
      </div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Register number</small><strong>${escapeHtml(app.reg)}</strong></div>
        <div class="detail-box"><small>Department / class</small><strong>${escapeHtml(app.dept)} · ${escapeHtml(app.className)}</strong></div>
        <div class="detail-box"><small>Hostel / room</small><strong>${escapeHtml(app.hostel)} · ${escapeHtml(app.room)}</strong></div>
        <div class="detail-box"><small>Leave type</small><strong>${escapeHtml(app.leaveType)}</strong></div>
        <div class="detail-box"><small>Dates</small><strong>${escapeHtml(app.from)} → ${escapeHtml(app.to)}</strong></div>
        <div class="detail-box"><small>Destination</small><strong>${escapeHtml(app.destination)}</strong></div>
        <div class="detail-box"><small>Parent / guardian</small><strong>${escapeHtml(app.parentName)}</strong></div>
        <div class="detail-box"><small>Parent phone</small><strong>${escapeHtml(app.parentPhone)}</strong></div>
        <div class="detail-box full-span"><small>Reason</small><strong>${escapeHtml(app.reason)}</strong></div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head"><h3>Parent verification</h3></div>
      <div class="form-grid">
        <div class="field">
          <label>Parent contacted</label>
          <select id="parentContacted">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="field">
          <label>Verification method</label>
          <input type="text" value="Phone call" />
        </div>
        <div class="field">
          <label>Parent confirmed leave</label>
          <select id="parentConfirmed">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="field">
          <label>Date / time of verification</label>
          <input type="text" value="22 Sep 2026, 08:45 AM" />
        </div>
        <div class="field full-width">
          <label>Verification remarks</label>
          <textarea id="verificationRemarks">Parent confirmed and approved the leave schedule.</textarea>
        </div>
      </div>

      <div class="button-row stacked">
        <button class="btn btn-light" onclick="showToast('Simulated call to parent: ' + '${escapeHtml(app.parentPhone)}')">☎ CALL PARENT</button>
        <button class="btn btn-success" onclick="showToast('Parent verification recorded.')">✓ MARK PARENT VERIFIED</button>
        <button class="btn btn-danger" onclick="showToast('Parent not verified recorded.')">✕ PARENT NOT VERIFIED</button>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head"><h3>Decision</h3></div>
      <div class="field">
        <label>Remarks / rejection reason</label>
        <textarea id="decisionRemarks" placeholder="Add remarks or rejection reason"></textarea>
      </div>
      <div class="button-row right">
        <button class="btn btn-danger" onclick="recordAuthorityDecision('tutor', 'rejected')">✕ REJECT APPLICATION</button>
        <button class="btn btn-primary" onclick="recordAuthorityDecision('tutor', 'approved')">✓ APPROVE & SEND TO HOD</button>
      </div>
    </div>
  `, 'queue');
}

function renderHodDashboard() {
  const waiting = apps.filter(app => app.currentStage === 'hod');
  return layoutPage('HOD Dashboard', `
    ${topHeader('Department HOD review', 'Review only those applications that have passed the Class Tutor stage.', '', '')}
    ${statsCards([
      { label: 'Pending applications', value: waiting.length, icon: '⏳' },
      { label: 'Approved today', value: '0', icon: '✓' },
      { label: 'Rejected applications', value: '0', icon: '✕' },
      { label: 'Urgent requests', value: waiting.filter(app => app.urgent).length, icon: '⚠' }
    ])}
    ${panel('Waiting for HOD approval', '', renderPendingAuthorityTable(waiting))}
  `, 'dashboard');
}

function renderHodReviewPage() {
  const app = getCurrentApp();
  return layoutPage('HOD Review', `
    ${topHeader('Department HOD review', 'Approve or reject the application after Class Tutor verification.', '', '')}
    <div class="panel">
      <div class="panel-head"><h3>${escapeHtml(app.id)} · ${escapeHtml(app.student)}</h3>${statusBadge(app.status, app.urgent ? 'urgent' : 'pending')}</div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Student</small><strong>${escapeHtml(app.student)}</strong></div>
        <div class="detail-box"><small>Register number</small><strong>${escapeHtml(app.reg)}</strong></div>
        <div class="detail-box"><small>Class</small><strong>${escapeHtml(app.className)}</strong></div>
        <div class="detail-box"><small>Leave type</small><strong>${escapeHtml(app.leaveType)}</strong></div>
        <div class="detail-box"><small>From / to</small><strong>${escapeHtml(app.from)} → ${escapeHtml(app.to)}</strong></div>
        <div class="detail-box"><small>Destination</small><strong>${escapeHtml(app.destination)}</strong></div>
        <div class="detail-box"><small>Parent verification</small><strong>${escapeHtml(app.parentVerification?.confirmed || 'Pending')}</strong></div>
        <div class="detail-box"><small>Tutor remarks</small><strong>${escapeHtml(app.parentVerification?.remarks || 'No remarks')}</strong></div>
        <div class="detail-box full-span"><small>Reason</small><strong>${escapeHtml(app.reason)}</strong></div>
      </div>
    </div>
    <div class="panel">
      <div class="field"><label>Remarks / rejection reason</label><textarea id="hodReason" placeholder="Add remarks or a rejection reason"></textarea></div>
      <div class="button-row right">
        <button class="btn btn-danger" onclick="recordAuthorityDecision('hod', 'rejected')">✕ REJECT</button>
        <button class="btn btn-primary" onclick="recordAuthorityDecision('hod', 'approved')">✓ APPROVE</button>
      </div>
    </div>
  `, 'queue');
}

function renderDeanDashboard() {
  if (!state.settings.dean) {
    return layoutPage('Dean Dashboard', `
      ${topHeader('Dean approval is disabled', 'The dean stage is currently turned off in system settings and will be skipped automatically.', '', '')}
      <div class="empty-state">No applications are waiting for Dean approval.</div>
    `, 'dashboard');
  }

  const waiting = apps.filter(app => app.currentStage === 'dean');
  return layoutPage('Dean Dashboard', `
    ${topHeader('Dean approval', 'Optional dean review is enabled. Applications will pause here until the dean acts.', '', '')}
    ${statsCards([
      { label: 'Pending review', value: waiting.length, icon: '⏳' },
      { label: 'Approved', value: '0', icon: '✓' },
      { label: 'Rejected', value: '0', icon: '✕' },
      { label: 'Optional stage', value: 'Enabled', icon: '⚙' }
    ])}
    ${panel('Dean approval queue', '', renderPendingAuthorityTable(waiting))}
  `, 'dashboard');
}

function renderDeputyDashboard() {
  const urgent = apps.filter(app => app.currentStage === 'deputy' && app.urgent);
  const normal = apps.filter(app => app.currentStage === 'deputy' && !app.urgent);
  return layoutPage('Deputy Chief Warden Dashboard', `
    ${topHeader('Deputy Chief Warden review', 'Handle urgent cases and standard hostel leave approvals.', '', '')}
    ${statsCards([
      { label: 'Normal pending', value: normal.length, icon: '▣' },
      { label: 'Urgent requests', value: urgent.length, icon: '⚠' },
      { label: 'Parent verification', value: '1', icon: '☎' },
      { label: 'Recently approved', value: '2', icon: '✓' }
    ])}
    <div class="two-col">
      ${panel('Normal pending applications', '', renderPendingAuthorityTable(normal))}
      ${panel('Urgent leave requests', '', renderPendingAuthorityTable(urgent))}
    </div>
  `, 'dashboard');
}

function renderUrgentLeavePage() {
  const app = getCurrentApp();
  return layoutPage('Urgent Leave Review', `
    ${topHeader('Urgent leave authorization', 'This application follows the urgent-leave procedure and must be explicitly authorized.', '', '')}
    <div class="notice urgent-notice">
      <strong>URGENT LEAVE REQUEST</strong><br>
      This urgent request requires Deputy Chief Warden authorization after parent confirmation.
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${escapeHtml(app.id)} · ${escapeHtml(app.student)}</h3>${statusBadge('Urgent Leave', 'urgent')}</div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Reason</small><strong>${escapeHtml(app.reason)}</strong></div>
        <div class="detail-box"><small>Parent / guardian</small><strong>${escapeHtml(app.parentName)}</strong></div>
        <div class="detail-box"><small>Parent phone</small><strong>${escapeHtml(app.parentPhone)}</strong></div>
        <div class="detail-box"><small>Destination</small><strong>${escapeHtml(app.destination)}</strong></div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>Parent verification</h3></div>
      <div class="form-grid">
        <div class="field"><label>Parent contacted</label><select><option>Yes</option><option>No</option></select></div>
        <div class="field"><label>Parent confirmed</label><select><option>Yes</option><option>No</option></select></div>
        <div class="field"><label>Verification remarks</label><textarea>Parent confirmed the emergency and approved the urgent exit.</textarea></div>
        <div class="field"><label>Verified date / time</label><input type="text" value="22 Sep 2026, 10:14 AM" /></div>
      </div>
      <div class="button-row right">
        <button class="btn btn-primary" onclick="recordAuthorityDecision('deputy', 'approved', true)">✓ AUTHORIZE URGENT LEAVE</button>
      </div>
    </div>
  `, 'queue');
}

function renderChiefDashboard() {
  if (!state.settings.chief) {
    return layoutPage('Chief Warden Dashboard', `
      ${topHeader('Chief Warden approval is disabled', 'The Chief Warden stage is currently disabled by system configuration and is skipped automatically.', '', '')}
      <div class="empty-state">No applications are waiting for Chief Warden review.</div>
    `, 'dashboard');
  }

  const waiting = apps.filter(app => app.currentStage === 'chief');
  return layoutPage('Chief Warden Dashboard', `
    ${topHeader('Chief Warden review', 'Review applications that reach the optional Chief Warden stage.', '', '')}
    ${statsCards([
      { label: 'Pending review', value: waiting.length, icon: '⏳' },
      { label: 'Approved', value: '0', icon: '✓' },
      { label: 'Rejected', value: '0', icon: '✕' },
      { label: 'Optional stage', value: 'Enabled', icon: '⚙' }
    ])}
    ${panel('Chief Warden queue', '', renderPendingAuthorityTable(waiting))}
  `, 'dashboard');
}

function renderPrincipalDashboard() {
  const requests = apps.filter(app => app.currentStage === 'principal');
  return layoutPage('Principal Dashboard', `
    ${topHeader('Final approval requests', 'The principal is the final mandatory approval stage before the final status is updated.', '', '')}
    ${statsCards([
      { label: 'Final approval requests', value: requests.length, icon: '✓' },
      { label: 'Approved', value: '0', icon: '✓' },
      { label: 'Rejected', value: '0', icon: '✕' },
      { label: 'Urgent', value: requests.filter(app => app.urgent).length, icon: '⚠' }
    ])}
    ${panel('Final approval queue', '', renderPendingAuthorityTable(requests))}
  `, 'dashboard');
}

function renderApprovalSettingsPage() {
  return layoutPage('Approval Settings', `
    ${topHeader('Approval workflow', 'Optional stages can be dynamically skipped. Mandatory stages are protected and cannot be disabled without warning.', '', '')}
    <div class="panel">
      <div class="panel-head"><h3>Sequential approval stages</h3></div>
      <div class="settings-list">
        <div class="setting-row"><div><strong>Class Tutor</strong><span>Required</span></div><span class="status approved">Required</span></div>
        <div class="setting-row"><div><strong>HOD</strong><span>Required</span></div><span class="status approved">Required</span></div>
        <div class="setting-row">
          <div><strong>Dean</strong><span>Optional</span></div>
          <label class="switch"><input type="checkbox" ${state.settings.dean ? 'checked' : ''} onchange="toggleSetting('dean', this.checked)" /><span class="slider"></span></label>
        </div>
        <div class="setting-row"><div><strong>Deputy Chief Warden</strong><span>Required</span></div><span class="status approved">Required</span></div>
        <div class="setting-row">
          <div><strong>Chief Warden</strong><span>Optional</span></div>
          <label class="switch"><input type="checkbox" ${state.settings.chief ? 'checked' : ''} onchange="toggleSetting('chief', this.checked)" /><span class="slider"></span></label>
        </div>
        <div class="setting-row"><div><strong>Principal</strong><span>Required</span></div><span class="status approved">Required</span></div>
      </div>
      <div class="notice">Mandatory stages cannot be disabled without user confirmation. Optional stages are skipped automatically when disabled.</div>
    </div>
  `, 'settings');
}

function toggleSetting(key, enabled) {
  if (key === 'dean' || key === 'chief') {
    state.settings[key] = enabled;
    showToast(`${enabled ? 'Enabled' : 'Disabled'} ${key === 'dean' ? 'Dean' : 'Chief Warden'} stage`);
    renderApp();
  }
}

function renderUserManagementPage() {
  const users = [
    { name: 'Arun Kumar', role: 'Student', status: 'Active' },
    { name: 'Demo Tutor', role: 'Class Tutor', status: 'Active' },
    { name: 'Demo HOD', role: 'HOD', status: 'Active' },
    { name: 'Demo Dean', role: 'Dean', status: 'Active' },
    { name: 'Demo Deputy Warden', role: 'Deputy Chief Warden', status: 'Active' },
    { name: 'Demo Chief Warden', role: 'Chief Warden', status: 'Active' },
    { name: 'Demo Principal', role: 'Principal', status: 'Active' },
    { name: 'System Administrator', role: 'System Administrator', status: 'Active' }
  ];

  return layoutPage('User Management', `
    ${topHeader('User management', 'Manage demo identities and role access for the prototype environment.', '', '')}
    <div class="panel">
      <div class="panel-head"><h3>Demo accounts</h3></div>
      ${users.map(user => `
        <div class="user-row">
          <div>
            <strong>${escapeHtml(user.name)}</strong>
            <div class="muted">${escapeHtml(user.role)} · DEMO ACCOUNT</div>
          </div>
          <span class="status approved">${escapeHtml(user.status)}</span>
        </div>
      `).join('')}
    </div>
  `, 'users');
}

function renderReportsPage() {
  const approved = apps.filter(app => app.status === 'Approved').length;
  const pending = apps.filter(app => app.status === 'Pending' || app.status === 'Under Review').length;
  const rejected = apps.filter(app => app.status === 'Rejected').length;

  return layoutPage('Reports', `
    ${topHeader('Reports', 'View summary statistics for leave activity over the selected time range.', '', '')}
    <div class="panel">
      <div class="panel-head">
        <h3>Summary</h3>
        <button class="btn btn-light" onclick="showToast('Export feature ready for future backend integration.')">Export later</button>
      </div>
      <div class="info-grid detail-grid">
        <div class="detail-box"><small>Total applications</small><strong>${apps.length}</strong></div>
        <div class="detail-box"><small>Approved</small><strong>${approved}</strong></div>
        <div class="detail-box"><small>Pending</small><strong>${pending}</strong></div>
        <div class="detail-box"><small>Rejected</small><strong>${rejected}</strong></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Application</th>
              <th>Department</th>
              <th>Leave type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${apps.map(app => `
              <tr>
                <td>${escapeHtml(app.id)}</td>
                <td>${escapeHtml(app.dept)}</td>
                <td>${escapeHtml(app.leaveType)}</td>
                <td>${statusBadge(app.urgent ? 'Urgent Leave' : app.status, app.urgent ? 'urgent' : app.status.toLowerCase().includes('approved') ? 'approved' : app.status.toLowerCase().includes('reject') ? 'rejected' : 'pending')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `, 'reports');
}

function renderAuditLogsPage() {
  const entries = apps.flatMap(app => app.audit);
  return layoutPage('Audit Logs', `
    ${topHeader('Audit logs', 'Every policy-critical action is recorded and remains read-only for students.', '', '')}
    <div class="panel">
      <div class="panel-head"><h3>Application activity</h3></div>
      <div class="history-list">
        ${entries.map(log => `
          <div class="history-item">
            <strong>${escapeHtml(log.action)}</strong>
            <div class="muted">${escapeHtml(log.actor)} · ${escapeHtml(log.role)} · ${escapeHtml(log.date)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `, 'audit');
}

function renderNotificationsPage() {
  const notifications = [
    'Your application HLMS-2026-001 is waiting for Class Tutor review.',
    'New leave application requires your action.',
    'Approval settings were updated by the System Administrator.',
    'Urgent leave request has been authorized after parent verification.'
  ];

  return layoutPage('Notifications', `
    ${topHeader('Notifications', 'Stay updated on application status, approvals and urgent leave requests.', '', '')}
    <div class="panel">
      ${notifications.map((note, index) => `
        <div class="notification-row">
          <div class="noti-icon ${index % 2 === 0 ? 'amber' : 'blue'}">${index % 2 === 0 ? '◷' : '🔔'}</div>
          <div>
            <strong>${escapeHtml(note)}</strong>
            <div class="muted">${index + 1} hour${index === 0 ? '' : 's'} ago</div>
          </div>
        </div>
      `).join('')}
    </div>
  `, 'notifications');
}

function renderQueuePage() {
  const role = state.user;
  const queue = getQueueAppsForRole(role);
  return layoutPage('Approval Queue', `
    ${topHeader('Approval queue', 'Applications currently assigned to your approval stage.', '', '')}
    ${panel('Pending applications', '', renderPendingAuthorityTable(queue))}
  `, 'queue');
}

function recordAuthorityDecision(role, decision, urgentLeave = false) {
  const app = getCurrentApp();
  const roleNameMap = {
    tutor: 'Class Tutor',
    hod: 'HOD',
    dean: 'Dean',
    deputy: 'Deputy Chief Warden',
    chief: 'Chief Warden',
    principal: 'Principal'
  };

  const remarks = document.getElementById(`${role}Reason`)?.value || document.getElementById('decisionRemarks')?.value || '';

  app.audit.push({
    actor: roles[role].name,
    role: roleNameMap[role],
    action: urgentLeave ? 'Urgent leave authorized' : decision === 'approved' ? `${roleNameMap[role]} approved` : `${roleNameMap[role]} rejected`,
    date: new Date().toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  });

  if (decision === 'approved') {
    app.approvals = app.approvals || {};
    app.approvals[role] = 'approved';
    app.status = 'Under Review';
    app.lastUpdated = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    if (urgentLeave) {
      app.urgentAuthorized = true;
      app.status = 'Approved';
      app.currentStage = 'principal';
      app.approvalAuthority = 'Principal';
      app.urgentAuthorization = {
        who: roles[role].name,
        result: 'Authorized through urgent-leave procedure',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        remarks: remarks || 'Urgent leave authorized after parent verification.'
      };
      showToast('Urgent leave authorized');
      state.page = 'detail';
    } else {
      if (role === 'tutor') app.currentStage = 'hod';
      if (role === 'hod') app.currentStage = state.settings.dean ? 'dean' : 'deputy';
      if (role === 'dean') app.currentStage = 'deputy';
      if (role === 'deputy') app.currentStage = state.settings.chief ? 'chief' : 'principal';
      if (role === 'chief') app.currentStage = 'principal';
      if (role === 'principal') {
        app.currentStage = 'final';
        app.status = 'Approved';
        app.approvalAuthority = 'Principal';
      }
      showToast('Application approved and sent forward');
    }
  } else {
    app.approvals = app.approvals || {};
    app.approvals[role] = 'rejected';
    app.status = 'Rejected';
    app.currentStage = 'final';
    app.lastUpdated = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    showToast('Application rejected');
  }

  renderApp();
}

function renderApp() {
  if (!state.user) {
    document.getElementById('app').innerHTML = renderLoginPage();
    return;
  }

  const pageMap = {
    dashboard: buildDashboard,
    apply: renderStudentApplyPage,
    applications: renderStudentApplicationsPage,
    profile: renderStudentProfilePage,
    detail: renderApplicationDetailPage,
    review: renderTutorReviewPage,
    queue: renderQueuePage,
    settings: renderApprovalSettingsPage,
    users: renderUserManagementPage,
    reports: renderReportsPage,
    audit: renderAuditLogsPage,
    notifications: renderNotificationsPage,
    tutor: renderTutorReviewPage,
    hod: renderHodReviewPage,
    dean: renderDeanDashboard,
    deputy: renderDeputyDashboard,
    chief: renderChiefDashboard,
    principal: renderPrincipalDashboard,
    urgent: renderUrgentLeavePage
  };

  const selectedPage = pageMap[state.page] || buildDashboard;
  document.getElementById('app').innerHTML = selectedPage();

  if (state.toast) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = state.toast;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML = renderLoginPage();
});
