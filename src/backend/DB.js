/**
 * Created by tiema on 6/8/2017.
 */

class DB {

    constructor(){
        this.server_script_url = 'http://www.xulin-tan.com/todolist/crud.php';
    }


    createItem(formData){
        fetch(this.server_script_url,{
            method: 'POST',
            body: formData
        }).then((response) => {
            response.text().then((text) => {
                console.log('added to list');
            });
        }).catch((error) => {
            console.log("from Server: "+error);
        });
    }

    async readItems(formData){
        let response = await fetch(this.server_script_url,{
                method: 'POST',
                body: formData
         });
        let json = await response.json();
        return json;
    }

    // readItems(formData){
    //     fetch(this.server_script_url,{
    //         method: 'POST',
    //         body: formData
    //     }).then((response) => {
    //         response.json().then(
    //             (json) => {return json;}
    //         )
    //     }).catch((error) => {
    //         console.log("from Server: "+error);
    //     });
    // }

    // dbOperation(url,){
    //     let postData = new FormData();
    //     postData.append('test','xulin tan');
    //     fetch('https://www.xulin-tan.de/todolist/add',{
    //         method: 'POST',
    //         body: postData
    //     }).then((response) => {
    //         response.text().then((text) => {
    //             console.log(text);
    //         });
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

}

export default DB;