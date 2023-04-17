import { pubSub } from "../pubsub.js"
import { getAdById } from "./adDetail.js"
import { buildAdDetail } from "./adDetailView.js"

export const adDetailController = async (adDetailElement, adId) => {

  try {
    const ad = await getAdById(adId)
    adDetailElement.innerHTML = buildAdDetail(ad)
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
  }
}