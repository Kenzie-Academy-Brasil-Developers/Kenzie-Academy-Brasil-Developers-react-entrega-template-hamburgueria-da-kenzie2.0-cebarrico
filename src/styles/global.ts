import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary:#27AE60;
    --color-primary-50:#93D7AF;
    --color-secondary:#EB5757;
    --color-grey-1:#333333;
    --color-grey-2:#828282;
    --color-grey-3:#E0E0E0;
    --color-grey-4:#F5F5F5;
    --color-deactivate:#BDBDBD;;
    --negative:#E60000;
    --warning:#FFCD07;
    --sucess:#168821;
    --information:#155BCB;
  }
  *{
     margin:0;
     padding:0;
     box-sizing: border-box;
     list-style:none;
     font-family: 'Inter', sans-serif;
     
  }
#root{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

header{
  width: 100%;
}
  main{
    width:100%;
    height: 100vh;
    max-width: 1200px;

    display:flex;
    flex-direction:column;
    justify-content: center;
    
    align-items: center;
    gap: 14px;

    padding: 0 20px;
  }
  
  .mainProducts{
    height: 100%;
  }
@media (min-width: 600px){
  main{
    flex-direction: row-reverse;
  }
}
  section{
    width:100%;
  }

  fieldset{
    border: none;
  }
  
  
  @media (min-width: 800px){
    main{
      display:flex;
      justify-content: center;
      padding-bottom: 37px;
    }
    header{
      display:flex;
      justify-content: center;
    }
  }
 
`;
