import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { LargeText } from '../Text/LargeText';
import { MiniText } from '../Text/MiniText';
import { SmallText } from '../Text/SmallText';

interface RateCardProps {
  title: string;
  name: string;
  value?: string | number;
  setValue: any;
  content?: string;
  help: string;
  isDisabled?: boolean;
  style?: any;
}

interface containerProps {
  isDisabled: boolean;
}

export const RateCard = (props: RateCardProps) => {
  const { title, name, value, content, help, isDisabled, style, setValue } = props;
  return (
    <RateCardContainer isDisabled={isDisabled === undefined ? false : isDisabled} sx={style}>
      <SmallText>{title}</SmallText>
      <InputUrl
        type={'number'}
        placeholder="-"
        value={value === 0 ? '' : value}
        name={name}
        disabled={isDisabled}
        maxLength={100}
        onChange={(e) => setValue(name, e.target.value)}
      />
      {content !== undefined && <ContentText>{content}</ContentText>}
      <MiniText>{help}</MiniText>
    </RateCardContainer>
  );
};

const RateCardContainer = styled(Box)<containerProps>(({ isDisabled, theme }) => ({
  padding: '32px 16px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  borderRadius: '15px',
  opacity: isDisabled ? 0.6 : 1,
  justifyContent: 'flex-start'
}));

const ContentText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '15px'
}));

const InputUrl = styled('input')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '30px',
  fontSize: '20px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText,
  '::placeholder': {
    color: theme.palette.primary.contrastText
  }
}));
