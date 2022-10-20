const {
    GoogleSpreadsheet
} = require('google-spreadsheet');
const CREDENTIALS = require('./sheets.json');
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

async function aas(){
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });
    
    // load the documents info
    await doc.loadInfo();
    let change = ['410-StocHyun-8549995374', '371-EnviHondV2-854-999-5365','300-AutoPorX-816-281-6544', '00-005-LtoyoBellR-8184939734', '00-002-CfordNapa-8184929153', '00-003-XhondTaz-8184929306', '330-SansKia_-818-493-9849', '331-SansMits-818-493-9971', '332-SansNiss-818-493-9961',  '00-001-MkiaHambra-3238142465', '380-RegaNiss-BDC-8323088796'];
    
    change.forEach(async(element) => {
        const sheet = doc.sheetsByTitle[element];
        console.log(sheet.title);
        await sheet.loadCells('H1:P1');
        const c61 = await sheet.getCellByA1('H1');
        const c62 = await sheet.getCellByA1('I1');
        const c63 = await sheet.getCellByA1('J1');
        const c64 = await sheet.getCellByA1('K1');
        const c65 = await sheet.getCellByA1('L1');
        const c66 = await sheet.getCellByA1('M1');
        const c67 = await sheet.getCellByA1('N1');
        const c68 = await sheet.getCellByA1('O1');
        c61.value = 'CustomerName'
        c62.value = 'IsBooking'
        c63.value = 'IterationsExceeded'
        c64.value = 'WebhookUsed'
        c65.value = 'WebhookStatus'
        c66.value = 'isFallback'
        c67.value = 'Intent'
        c68.value = 'Action'
        await sheet.saveUpdatedCells();
        console.log('update written to sheet')
    });
}

aas()
