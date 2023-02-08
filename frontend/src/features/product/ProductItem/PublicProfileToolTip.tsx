import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Fade, IconButton, Link, styled, Typography } from '@mui/material';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export function PublicProfileToolTip() {
    return (
        <HtmlTooltip
            title={
                <>
                    <Typography color="common.black" sx={{ mb: 1.5 }}>
                        This widget links directly to your public profile so
                        that you can easily share your impact with your
                        customers. Turn it off here if you do not want the badge
                        to link to it.
                    </Typography>
                    <Link underline="none" href="/">
                        View Public Profile
                    </Link>
                </>
            }
            TransitionComponent={Fade}
            placement="right"
            TransitionProps={{ timeout: 300 }}
        >
            <IconButton
                sx={{
                    p: '4px',
                    marginTop: '-4px',
                }}
            >
                <InfoOutlinedIcon
                    sx={{
                        fontSize: '14px',
                    }}
                    color="primary"
                />
            </IconButton>
        </HtmlTooltip>
    );
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        textAlign: 'center',
        padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
        backgroundColor: 'white',
        boxShadow: `0px 42px 76px rgba(0, 0, 0, 0.05), 
            0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
            0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704), 
            0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
            0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
            0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037)`,
        borderRadius: '4px',
        maxWidth: theme.spacing(31),
    },
}));
