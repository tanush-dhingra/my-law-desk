const clients = [
  { name: 'Amit Sharma', phone: '9876543210', status: 'Active', email: 'amit.sharma@example.com', lastMeeting: '15 Jul 2026' },
  { name: 'Priya Verma', phone: '9123456780', status: 'Active', email: 'priya.verma@example.com', lastMeeting: '18 Jul 2026' },
  { name: 'Rahul Singh', phone: '9988776655', status: 'Closed', email: 'rahul.singh@example.com', lastMeeting: '01 Jul 2026' }
];

const cases = [
  { title: 'Property Dispute', client: 'Amit Sharma', status: 'Ongoing' },
  { title: 'Cheque Bounce', client: 'Rahul Singh', status: 'Closed' },
  { title: 'Divorce Petition', client: 'Priya Verma', status: 'Pending' }
];

const appointments = [
  { client: 'Amit Sharma', date: '20 Jul 2026', purpose: 'Document Review' },
  { client: 'Priya Verma', date: '21 Jul 2026', purpose: 'Legal Advice' }
];

const hearings = [
  { caseTitle: 'Property Dispute', date: '25 Jul 2026', court: 'Delhi High Court' },
  { caseTitle: 'Divorce Petition', date: '28 Jul 2026', court: 'Family Court' }
];

const files = [
  { name: 'Sale Deed.pdf', caseTitle: 'Property Dispute', type: 'Evidence' },
  { name: 'Marriage Certificate.pdf', caseTitle: 'Divorce Petition', type: 'Proof' }
];
