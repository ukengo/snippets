//json from google sheet
const jSon = () => {
    const base = 'https://docs.google.com/spreadsheets/d/1dvGIpn0yJv8cRk7Sw5G3xcoLcYHpe_1UB2HcE4f9k34/gviz#gid=743891930/tq?';
    const query = encodeURIComponent('Select A,B,C,D,E,F,G');
    const url = base + '&tq=' + query;
    let response = UrlFetchApp.fetch(url).getContentText()
    const data = JSON.parse(response.substring(47).slice(0, -2));
    let result = []
    data.table.rows.forEach((item) => {
        let res = []
        item.c.forEach((d) => {
            if (d) {
                res.push(d.v)
            } else {
                res.push('')
            }
        })
        result.push(res)
    })
    console.log(result);
};