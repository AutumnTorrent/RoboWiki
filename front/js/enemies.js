document.addEventListener('DOMContentLoaded', () => {
    // html element main
    let main = document.getElementById('main');
    async function getInfo() {
        await fetch('http://localhost:3000/api/getdata/enemies',)
            .then(res => res.json())
            .then(data => {
                let div_main_header = document.createElement('div')
                div_main_header.className = 'main_header';
                let main_header_label = document.createElement('h1');
                main_header_label.textContent = "Enemies";
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
                    let p_description = document.createElement('p');
                    p_description.textContent = element.description;

                    div_content_info.append(p_description);

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
