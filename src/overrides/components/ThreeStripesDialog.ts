export const getThreeStripesMuiDialog = () => {
   return {
       MuiDialog: {
           'paper': {
               '&.dialog': {
                   padding: '0px',
                   margin: '0px',
                   borderRadius: '3px',
               }
           },
       },
       MuiDialogTitle: {
           'root': {
               flexDirection: 'row',
               display: 'flex',
               justifyContent: 'space-between',

               marginTop: '24px',
               marginBottom: '24px',
               marginLeft: '48px',
               marginRight: '24px',
               padding: '0px',
           },
       },
       MuiDialogContent: {
           'root': {
               margin: '0px',
               marginLeft: '48px',
               marginRight: '48px',
               padding: '0px',
           }
       },
       MuiDialogActions: {
           'root': {
               justifyContent: 'flex-start',
               margin: '48px',
               marginTop: '24px',
               marginBottom: '32px',
               padding: '0px',
           }
       },
   }
}