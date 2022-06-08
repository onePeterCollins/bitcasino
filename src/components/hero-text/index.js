/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/main-content
 *  */

const HeroText = () => {
  return (
    <div className='h-2/6'>
      <p className='hero_text text-4xl font-bold mt-5 b-white-text'>
        Now you can track
        <br/>
        all your cryptos here!
      </p>

      <p className='caption_text leading-8 text-xl mt-3 b-purple-tint-text'>
        Just enter the
        <br/>
        cryptocurrency code on the
        <br/>
        form to the right.
      </p>
    </div>
  )
}

export default HeroText;
