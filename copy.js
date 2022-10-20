import clipboard from 'clipboardy';


exports.getCopy = async (req, res, next) =>{
    //clipboard.writeSync('🦄');

    let aa = await clipboard.readSync();
    return aa

}