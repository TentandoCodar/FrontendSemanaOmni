import styled from 'styled-components';

export const Container = styled.div`
    margin: 80px auto 0;
    
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`

`;

export const Content = styled.div`
    background-color: #fff;
    width: 100%;
    margin-top: 25px;
    border-radius: 4px;
    padding: 25px;

    p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;

    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;

    }
    input {
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
    }
    button {
        border: 0;
        border-radius: 2px;
        width: 100%;
        heigth: 42px;
        padding: 8px 20px;
        font-size: 16px;
        font-weigth: bold;
        background: #f05a5b;
        color: #fff;
        cursor: pointer;
    }
    button:hover {
        background: #e14f50
    }
`;