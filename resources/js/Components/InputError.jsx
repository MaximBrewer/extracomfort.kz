export default function InputError({ message, ...props }) {
    return message ? (
        <p {...props} className={'error-input-text text-red-700 text-sm'}>
            {message}
        </p>
    ) : null;
}
