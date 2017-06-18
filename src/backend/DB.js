/**
 * Created by tiema on 6/8/2017.
 */

class DB {

    constructor(){
        this.server_script_url = 'http://www.xulin-tan.com/todolist/crud.php';
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

    async readItems(formData){
        let response = await fetch(this.server_script_url,{
                method: 'POST',
                mode: 'cors',
                body: formData
         });
        return await response.json();
    }
}

export default DB;