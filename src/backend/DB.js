/**
 * Created by tiema on 6/8/2017.
 */

class DB {

    constructor(){
        this.server_script_url = 'https://www.xulin-tan.de/scripts/crud.php';
    }

    operateItem(formData){
        fetch(this.server_script_url,{
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then((response) => {
            response.text().then((text) => {
                // console.log('added to list');
            });
        }).catch((error) => {
            console.log("from Server: "+error);
        });
    }

    readItems(formData){
        let items = fetch(this.server_script_url,{
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then((response) => {
                return response.json()
            }
        );
        return items;
    }
}

export default DB;