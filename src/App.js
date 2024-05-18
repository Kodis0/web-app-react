import logo from './logo.svg';
import './App.css';

function App() {
  // Функция для обработки отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы (перезагрузка страницы)

    const formData = new FormData(event.target); // Создаем объект FormData для сбора данных из формы
    const country = formData.get('country'); // Получаем значение поля "country"
    const phoneNumber = formData.get('phoneNumber'); // Получаем значение поля "phoneNumber"
    const password = formData.get('password'); // Получаем значение поля "password"

    // Создаем объект с данными для отправки на сервер
    const data = new URLSearchParams();
    data.append('country', country);
    data.append('phoneNumber', phoneNumber);
    data.append('password', password);

    // Отправляем данные на сервер
    try {
      const response = await fetch('https://localhost:7270/api/your-endpoint', {
        method: 'POST',
        body: data // Отправляем данные в формате application/x-www-form-urlencoded
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json(); // Получаем JSON-ответ от сервера
      console.log('Data sent successfully:', responseData);
      // Здесь можно выполнить дополнительные действия после успешной отправки данных
    } catch (error) {
      console.error('There was an error sending data:', error);
      // Обрабатываем ошибку отправки данных
    }
  };

  return (
    <div className="RegistryPage">
      <header className="RegistryPage-header">
        <img src={logo} className="RegistryPage-logo" alt="logo" />
        <div className='h1'>
          <h1>Monogram</h1>
        </div>
        <div className='Confirm'>
          <text className='ConfirmText'>Please select your country and enter your number</text>
        </div>
        {/* Форма с обработчиком события onSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="country" className="text-field__label"><p>Country</p></label>
            <input type="text" className="text-field__input" name="country" placeholder="Russian Federation" id="country" aria-describedby="countrydes"/>
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="text-field__label"><p>Your phone number</p></label>
            <input type="tel" className="text-field__input" name="phoneNumber" placeholder="Your phone number" id="phoneNumber" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-field__label"><p>Password</p></label>
            <input type="password" className="text-field__input" name="password" placeholder="Your password" id="password" />
          </div>
          <div className="mb-3-form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
