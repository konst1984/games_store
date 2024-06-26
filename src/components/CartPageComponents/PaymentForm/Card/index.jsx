import { replaceStarsOnNumbersCard } from 'utils/replaceStarsOnNumbersCard';

import usePaymentContext from '../hooks/usePaymentContext';

import cn from './styles.module.scss';

const Card = () => {
    const { numberCard, name, ccv, turnClass, cardValidityPeriod } = usePaymentContext();

    const defaultProp = (prop, value) => {
        return prop ? prop : value;
    };

    const { year, month } = cardValidityPeriod;

    return (
        <div className={cn.card}>
            <div className={`${cn['card-inner']} ${cn[turnClass]}`}>
                <div className={cn['card-front']}>
                    <div className={cn['card-bg']}></div>

                    <div className={cn['card-glow']}></div>

                    <div className={cn['card-contactless']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
                            <path
                                fill="none"
                                stroke="#f9f9f9"
                                strokeWidth="6"
                                strokeLinecap="round"
                                d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5
  0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
                            />
                        </svg>
                    </div>

                    <div className={cn['card-chip']}></div>

                    <div className={cn['card-holder']}>{defaultProp(name, 'john dow')}</div>

                    <div className={cn['card-number']}>{replaceStarsOnNumbersCard(numberCard)}</div>

                    <div className={cn['card-valid']}>
                        {defaultProp(month, 'month')}/{defaultProp(year, 'year')}
                    </div>
                </div>
                <div className={cn['card-back']}>
                    <div className={cn['card-signature']}>{defaultProp(name, 'john dow')}</div>
                    <div className={cn['card-seccode']}>{defaultProp(ccv, '***')}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
