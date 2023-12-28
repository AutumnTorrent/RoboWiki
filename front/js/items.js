document.addEventListener('DOMContentLoaded', () => {
    // html element main
    let main = document.getElementById('main');
    async function getInfo() {
        await fetch('http://localhost:3000/api/getdata/items',)
            .then(res => res.json())
            .then(data => {
                let div_main_header = document.createElement('div')
                div_main_header.className = 'main_header';
                let main_header_label = document.createElement('h1');
                main_header_label.textContent = "Items";
                div_main_header.append(main_header_label)

                let div_main_content = document.createElement('div');
                div_main_content.className = 'main_content';

                data.forEach(element => {
                    let div_content_header = document.createElement('div');
                    div_content_header.className = 'content_header';
                    let h2_content_header = document.createElement('h2');
                    h2_content_header.textContent = element.name

                    div_content_header.append(h2_content_header);

                    let div_content_info = document.createElement('div');
                    div_content_info.className = 'content_info';
                    let p_description1 = document.createElement('p');
                    let p_description2 = document.createElement('p');
                    p_description1.textContent = element.effects;
                    p_description2.textContent = element.const

                    div_content_info.append(p_description1, p_description2);

                    div_main_content.append(div_content_header, div_content_info);
                });

                main.append(div_main_header, div_main_content);
            })
            .catch(error => {
                alert(`problem: ${error}`);
            })
    }
    getInfo();
})
