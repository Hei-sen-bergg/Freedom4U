import styled from 'styled-components'

const Announcement = () => {

    const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    `

  return (
    <Container>
      The deal is ON !!!  Buy now to buy more 
    </Container>
  )
}

export default Announcement
