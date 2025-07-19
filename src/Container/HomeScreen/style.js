import {StyleSheet} from 'react-native';
import {RfH, RfW} from '../../utils/helper';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  homecontainer: {
    paddingHorizontal: RfW(20),
    marginTop: RfH(30),
  },
  scrollViewContent: {
    paddingBottom: RfH(6),
  },
  jobDescriptionContainer: {
    borderWidth: 1,
    padding: RfH(10),
    borderRadius: RfH(7),

    borderColor: '#6a11cb',
    marginTop: RfH(10),
    alignSelf: 'center',
    width: RfW(330),
  },
  CompanyTitle: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '500',
    // color: colors.black,
    color: '#1A237E',
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: '500',
    // color: colors.black,
    color: '#1A237E',
  },
  jobDuration: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  jobDetails: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.black,
  },
  boldText: {
    fontWeight: '600',
    color: colors.black,
    marginTop: 2,
    fontSize: 12,
  },
  normalText: {
    fontWeight: '400',
    color: colors.black,
    marginTop: 2,
    fontSize: 12,
  },
  textSection: {
    marginBottom: 10,
  },

  skillsContainer: {
    borderWidth: 1,
    padding: RfH(15),
    borderRadius: RfH(7),

    borderColor: '#6a11cb',
    marginTop: RfH(10),
    alignSelf: 'center',
    width: RfW(330),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    marginBottom: RfH(10),
    fontSize: 16,
    fontWeight: '700',
    color: '#1A237E',
    textAlign: 'left',
    borderBottomWidth: 2,
    borderBottomColor: '#3949AB',
    paddingBottom: RfH(5),
  },
  skillCategory: {
    marginBottom: RfH(15),
  },
  boldText2: {
    fontWeight: '600',
    color: '#212121',
    marginTop: RfH(10),
    fontSize: 14,
  },
  normalText2: {
    fontWeight: '400',
    color: '#757575',
    marginTop: RfH(5),
    fontSize: 13,
    lineHeight: RfH(18),
  },
  educationContainer: {
    borderWidth: 1,
    padding: RfH(15),
    borderRadius: RfH(7),

    borderColor: '#6a11cb',
    marginTop: RfH(10),
    alignSelf: 'center',
    width: RfW(330),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
    color: '#1A237E',
    textAlign: 'left',
    borderBottomWidth: 2,
    borderBottomColor: '#3949AB',
    paddingBottom: 5,
  },
  educationItem: {
    marginBottom: 15,
  },
  degreeText: {
    fontWeight: '600',
    color: '#212121',
    fontSize: 16,
    marginBottom: 2,
  },
  institutionText: {
    fontWeight: '500',
    color: '#757575',
    fontSize: 14,
    marginBottom: 2,
  },
  durationText: {
    fontWeight: '400',
    color: '#757575',
    fontSize: 14,
    marginBottom: 5,
  },
  detailsText: {
    fontWeight: '400',
    color: '#212121',
    fontSize: 14,
  },
});

export default styles;
