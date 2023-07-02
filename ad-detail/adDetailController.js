import { pubSub } from "../pubsub.js"
import { deleteAd, getAdById } from "./adDetail.js"
import { buildAdDetail } from "./adDetailView.js"
import { decodeToken } from "../utils/decodeToken.js"

export const adDetailController = async (adDetailElement, adId) => {

  try {
    const ad = await getAdById(adId)
    adDetailElement.innerHTML = buildAdDetail(ad)
    handleDeleteAdButton(adDetailElement, ad)
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
  }

  function handleDeleteAdButton(adDetailElement, ad) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = adDetailElement.querySelector('#deleteAd');

    if (!token) {
      deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token);
      if (ad.userId === userInfo.userId) {
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('Are you sure?')
          if (answer) {
            await deleteAd(ad.id)
            window.location = '/'
          }
        })
      } else {
        deleteButtonElement.remove()
      }
    }
  }
}