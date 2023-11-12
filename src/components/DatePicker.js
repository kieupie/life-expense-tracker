import { h, Component } from 'preact';

class DatePicker extends Component {
    render() {
        return (
            <label className="block mb-4 text-2xl font-bold">
                Date of birth:
                <input
                    type="date"
                    className="border border-gray-300 p-2 rounded ml-5 font-normal focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300
                               bg-white text-gray-700 placeholder-gray-400
                               hover:border-gray-400 focus:ring-blue-500"
                    onChange={this.props.onChange}
                    placeholder="Select a date"
                />
            </label>
        );
    }
}

export default DatePicker;
