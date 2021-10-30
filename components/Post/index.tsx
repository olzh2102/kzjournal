import Image from 'next/image'

import { Box, Typography } from '@mui/material';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

import { StyledPaper, Title, ContentBoxStyled, MetadataBoxStyled } from './style'

const Post = () => {
    return (
        <StyledPaper elevation={0}>
            <ContentBoxStyled>
                <Image className="image" src="https://leonardo.osnova.io/a1af9c5d-f040-5d52-afb5-dad83692a9e8/-/preview/700/-/format/webp/" height={500} width={500}  />
                <Box>
                    <Title variant="h6">
                        В Екатеринбурге приют для животных одел собак в человеческую одежду, чтобы помочь им найти дом
                    </Title>
                    <Typography variant="body2">
                        Пустые коридоры — не повод для страха, так? 
                        Тысячи пользователей, придумывающие жуткие сюжеты и 
                        крипипасты о безлюдных пространствах, с вами поспорят.
                    </Typography>
                </Box>
            </ContentBoxStyled>

            <MetadataBoxStyled>
                <Typography variant="caption">5 hours ago</Typography>
                <TextsmsOutlinedIcon fontSize="small" />
                <BookmarkBorderOutlinedIcon fontSize="small" />
                <IosShareOutlinedIcon fontSize="small" />
            </MetadataBoxStyled>
        </StyledPaper>
    ); 
}

export default Post;
