// json2html.js

export default function json2html(data) {
    // Get unique keys from all objects in data to create the headers
    const columns = [...new Set(data.flatMap(Object.keys))];
    
    // Start building the HTML table string
    let html = `<table data-user="manishkanaparthi13@gmail.com">`;
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
    
    // Add table rows
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
  