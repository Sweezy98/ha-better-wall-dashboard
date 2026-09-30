import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
`;

const StyledSplash = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  text-align: center;
  padding: 24px;

  .action {
    padding: 10px 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.92);
    font: inherit;
  }

  .mark {
    width: 64px;
    height: 64px;
    animation: ${pulse} 1.6s ease-in-out infinite;
  }
`;

/**
 * Shown before there is a connection, in place of the dashboard when the
 * integration is missing, and when it failed to draw.
 */
const Splash: React.FC<{ message?: string; children?: React.ReactNode }> = ({ message, children }) => (
  <StyledSplash>
    <svg className='mark' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M3.5 4h17A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 17.5v-11A2.5 2.5 0 0 1 3.5 4z M2.8 5.8v12.4h18.4V5.8z M4.6 7.6h3.8v8.8H4.6z M10 7.6h4.3v3.9H10z M15.3 7.6h4.3v3.9h-4.3z M10 12.5h4.3v3.9H10z M15.3 12.5h4.3v3.9h-4.3z' />
    </svg>
    {message && <p>{message}</p>}
    {children}
  </StyledSplash>
);

export default Splash;
