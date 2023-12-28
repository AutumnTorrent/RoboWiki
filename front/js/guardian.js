document.addEventListener('DOMContentLoaded', () => {
    // html element main
    let main = document.getElementById('main');
    async function getInfo() {
        await fetch('http://localhost:3000/api/getdata/guardian',)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // create html elem div.main_header, h1. Add h1 in div
                let div_main_header = document.createElement('div')
                div_main_header.className = 'main_header';
                let main_header_label = document.createElement('h1');
                main_header_label.textContent = data.name;

                div_main_header.append(main_header_label)

                let div_main_content = document.createElement('div');
                div_main_content.className = 'main_content';

                let ul = document.createElement('ul');
                let li_1 = document.createElement('li');
                let li_2 = document.createElement('li');
                let li_3 = document.createElement('li');
                li_1.textContent = `Primary Ability: ${data.Primary_Ability}`
                li_2.textContent = `Primary Ability: ${data.Secondary_Ability}`
                li_3.textContent = `Primary Ability: ${data.Passive_Ability}`

                ul.append(li_1, li_2, li_3);
                div_main_content.append(ul);

                // add elemets to page in main container
                main.append(div_main_header, div_main_content);
            })
            .catch(error => {
                alert(`problem: ${error}`);
            })
    }
    getInfo();
})
