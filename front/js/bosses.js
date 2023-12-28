document.addEventListener('DOMContentLoaded', () => {
    // html element main
    let main = document.getElementById('main');
    async function getInfo() {
        await fetch('http://localhost:3000/api/getdata/bosses',)
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    console.log(item);

                    // create html elem div.main_header, h1. Add h1 in div
                    let div_main_header = document.createElement('div')
                    div_main_header.className = 'main_header';
                    let main_header_label = document.createElement('h1');
                    main_header_label.textContent = "Boss";
                    
                    div_main_header.append(main_header_label)

                    // create html elem div.main_content
                    let div_main_content = document.createElement('div');
                    div_main_content.className = 'main_content';

                    // create html elem div.content_header, h2
                    let div_content_header = document.createElement('div');
                    div_content_header.className = 'content_header';
                    let h2_content_header = document.createElement('h2');
                    h2_content_header.textContent = item.name
                    
                    div_content_header.append(h2_content_header);
                    
                    // create html div.content_info
                    let div_content_info = document.createElement('div');
                    div_content_info.className = 'content_info';
                    let p_description = document.createElement('p');
                    p_description.textContent = item.description;
                    let p = document.createElement('p');
                    p.innerHTML = "<strong>Moveset</strong>"
                    let ul = document.createElement('ul');
                    let li_1 = document.createElement('li');
                    let li_2 = document.createElement('li');
                    let li_3 = document.createElement('li');
                    let li_4 = document.createElement('li');
                    li_1.textContent = `${item.name_attak1} - ${item.description1}`
                    li_2.textContent = `${item.name_attak2} - ${item.description2}`
                    li_3.textContent = `${item.name_attak3} - ${item.description3}`
                    li_4.textContent = `${item.name_attak4} - ${item.description4}`

                    ul.append(li_1, li_2, li_3, li_4)
                    div_content_info.append(p_description, p, ul)

                    div_main_content.append(div_content_header, div_content_info);

                    // add elemets to page in main container
                    main.append(div_main_header, div_main_content);
                });
            })
            .catch(error => {
                alert(`problem: ${error}`);
            })
    }
    getInfo();
})
