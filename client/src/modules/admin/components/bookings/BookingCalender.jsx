import { WeeklyCalendar } from "antd-weekly-calendar";
import { PropTypes } from "prop-types";
import React, { memo } from "react";

const dataMapper = (data) => {
  if (data.length > 0) {
    return data
      .map((item) => {
        const bookingDate = item.bookingDate.split("T")[0];
        return item.bookingSlots
          .map((bookingSlot) => {
            let { startTime, endTime } = bookingSlot;
            startTime = `${bookingDate}T${startTime.split("T")[1]}`;
            endTime = `${bookingDate}T${endTime.split("T")[1]}`;
            return {
              ...bookingSlot,
              title: bookingSlot.courtName,
              startTime: new Date(startTime),
              endTime: new Date(endTime),
            };
          })
          .flat();
      })
      .flat();
  }
};

function BookingCalender(props) {
  const data = dataMapper(props.data);
  return (
    <>
      <WeeklyCalendar
        events={data}
        weekends={true}
        onEventClick={(event) => {
          console.log(event);
        }}
        onSelectDate={(date) => console.log(date)}
      />
    </>
  );
}
export default memo(BookingCalender);

BookingCalender.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
