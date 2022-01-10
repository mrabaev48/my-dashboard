import {FC, useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

import './datepicker.css'
import {DatePickerHelper} from "./DatePickerHelper";

export interface IDatepickerProps {
    onChange?: (event: any) => void
}

export const Datepicker: FC<IDatepickerProps> = ({
                                                     onChange
                                                 }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDateVal] = useState(new Date());
    console.log('date: ', date)
    const [year, setYearVal] = useState(date.getFullYear());
    const [month, setMonthVal] = useState(date.getMonth());
    const [monthDetails, setMonthDetails] = useState([]);
    const [selectedDay, setSelectedDay] = useState(DatePickerHelper.todayTimestamp);
    const ref = useRef();
    console.log('ref: ', ref)
    const setDateToInput = (timestamp: number) => {
        let dateString = DatePickerHelper.getDateStringFromTimestamp(timestamp);
        if (ref && ref.current) {
            // @ts-ignore
            ref.current.value = dateString;
        }
    }

    const addBackDrop = (e: any) => {
        if (showDatePicker && !ReactDOM.findDOMNode(ref.current)?.contains(e.target)) {
            setShowDatePicker(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', addBackDrop);
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('click', addBackDrop);
        }
    }, [])

    const setMonth = (offset: any) => {
        let yearVal = year;
        let monthVal = month + offset;
        if (monthVal === -1) {
            monthVal = 11;
            yearVal--;
        } else if (monthVal === 12) {
            monthVal = 0;
            yearVal++;
        }

        setYearVal(yearVal);
        setMonthVal(monthVal);
        setMonthDetails(DatePickerHelper.getMonthDetails(yearVal, monthVal));
    }

    const setYear = (offset: number) => {
        let yearVal = year + offset;
        setMonthDetails(DatePickerHelper.getMonthDetails(yearVal, month))
    }

    const onDateClick = (day: any) => {
        // this.setState({selectedDay: day.timestamp}, () => this.setDateToInput(day.timestamp));
        setSelectedDay(day.timestamp);
        setDateToInput(day.timestamp);

        if (onChange) {
            onChange(day.timestamp);
        }
    }

    const updateDateFromInput =()=> {
        // @ts-ignore
        let dateValue = ref.current.value;
        let dateData = DatePickerHelper.getDateFromDateString(dateValue);
        if(dateData !== null) {
            setDateVal(new Date(dateData.year, dateData.month, dateData.date));
            setYearVal(dateData.year);
            setMonthVal(dateData.month - 1);
            setMonthDetails(DatePickerHelper.getMonthDetails(dateData.year, dateData.month - 1));
        }
    }

    const renderCalendar = () => {
        let days = monthDetails.map((day: any, index) => {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') +
                    (DatePickerHelper.isCurrentDay(day) ? ' highlight' : '') + (DatePickerHelper.isSelectedDay(day, selectedDay) ? ' highlight-green' : '')}
                     key={index}>
                    <div className='cdc-day'>
                        <span onClick={() => onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {DatePickerHelper.daysAbbreviation.map((d, i) => <div key={i}
                                                                                          className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }


    return (
        <div className='MyDatePicker'>
            <div className='mdp-input' onClick={() => setShowDatePicker(true)}>
                {/*// @ts-ignore*/}
                <input type='date' onChange={updateDateFromInput} ref={ref}/>
            </div>
            {showDatePicker ? (
                <div className='mdp-container'>
                    <div className='mdpc-head'>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={() => setYear(-1)}>
                                <span className='mdpchbi-left-arrows'></span>
                            </div>
                        </div>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={() => setMonth(-1)}>
                                <span className='mdpchbi-left-arrow'></span>
                            </div>
                        </div>
                        <div className='mdpch-container'>
                            <div className='mdpchc-year'>{year}</div>
                            <div className='mdpchc-month'>{DatePickerHelper.getMonthStr(month)}</div>
                        </div>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={() => setMonth(1)}>
                                <span className='mdpchbi-right-arrow'></span>
                            </div>
                        </div>
                        <div className='mdpch-button' onClick={() => setYear(1)}>
                            <div className='mdpchb-inner'>
                                <span className='mdpchbi-right-arrows'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mdpc-body'>
                        {renderCalendar()}
                    </div>
                </div>
            ) : ''}
        </div>
    )
}