document.addEventListener('DOMContentLoaded', () => {
    // html element main
    let main = document.getElementById('main');
    async function getInfo() {
        await fetch('http://localhost:3000/api/getdata/weapons',)
            .then(res => res.json())
            .then(data => {
                let div_main_header = document.createElement('div')
                div_main_header.className = 'main_header';
                let main_header_label = document.createElement('h1');
                main_header_label.textContent = "Weapons";
                div_main_header.append(main_header_label);

                let div_main_content = document.createElement('div');
                div_main_content.className = 'main_content';

                let table = document.createElement('table');
                let tr = document.createElement('tr');
                tr.className = 'tr_label';
                let td_name = document.createElement('td');
                let td_type = document.createElement('td');
                let td_dmg = document.createElement('td');
                let td_firerate = document.createElement('td');
                let td_range = document.createElement('td');
                let td_crit = document.createElement('td');
                let td_ammo = document.createElement('td');
                let td_altfire = document.createElement('td');
                td_name.textContent = 'Name';
                td_type.textContent = 'Type';
                td_dmg.textContent = 'Base dmg';
                td_firerate.textContent = 'Firerate';
                td_range.textContent = 'Range';
                td_crit.textContent = 'Crit multiplier';
                td_ammo.textContent = 'ammo';
                td_altfire.textContent = 'altfire';

                tr.append(td_name, td_type, td_dmg, td_firerate, td_range, td_crit, td_ammo, td_altfire);
                table.append(tr);

                data.forEach(element => {
                    let tr = document.createElement('tr');
                    let td_name = document.createElement('td');
                    let td_type = document.createElement('td');
                    let td_dmg = document.createElement('td');
                    let td_firerate = document.createElement('td');
                    let td_range = document.createElement('td');
                    let td_crit = document.createElement('td');
                    let td_ammo = document.createElement('td');
                    let td_altfire = document.createElement('td');
                    td_name.textContent = element.name;
                    td_type.textContent = element.type;
                    td_dmg.textContent = element.base_dmg;
                    td_firerate.textContent = element.firerate;
                    td_range.textContent = element.range;
                    td_crit.textContent = element.crit_multiplier;
                    td_ammo.textContent = element.ammo;
                    td_altfire.textContent = element.altfire;

                    tr.append(td_name, td_type, td_dmg, td_firerate, td_range, td_crit, td_ammo, td_altfire)
                    table.append(tr);
                });

                div_main_content.append(table);

                main.append(div_main_header, div_main_content);
            })
            .catch(error => {
                alert(`problem: ${error}`);
            })
    }
    getInfo();
})
